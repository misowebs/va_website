import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import historyData from './Gallery/JSON-Files/HistorySections.json';
const CDN = import.meta.env.VITE_CDN_BASE;

function isInternalLink(url) {
  return typeof url === 'string' && url.startsWith('/');
}

function HistoryItem({ item }) {
  // ===== Text Item =====
  if (item.type === 'text') {
    const content = (
      <div className={`history-item-text${item.variant === 'boxed' ? ' boxed' : ''}`}>
        {item.title && <h4 className="history-item-title">{item.title}</h4>}
        {item.text && <p className="history-item-body">{item.text}</p>}
      </div>
    );

    return item.link ? (
      isInternalLink(item.link) ? (
        <Link to={item.link} className="history-item-link">
          {content}
        </Link>
      ) : (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="history-item-link">
          {content}
        </a>
      )
    ) : (
      content
    );
  }

  // ===== Image Item =====
  const image = (
    <figure className="history-item-image-figure">
      <img className="history-item-image" src={`${CDN}/${item.src}`} alt={item.alt || item.title || ''} />
      {item.title && <figcaption className="history-item-caption">{item.title}</figcaption>}
    </figure>
  );

  return item.link ? (
    isInternalLink(item.link) ? (
      <Link to={item.link} className="history-item-link">
        {image}
      </Link>
    ) : (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="history-item-link">
        {image}
      </a>
    )
  ) : (
    image
  );
}

function HistorySection({ year, items, isOpen, sectionRef, isClickable, onClick }) {
  return (
    // ===== Year Section =====
    <section
      ref={sectionRef}
      className={`section history-year-section box-lined ${isOpen ? 'is-open' : 'is-closed'} ${isClickable ? 'clickable' : ''}`}
      aria-labelledby={`history-year-${year}`}
      aria-expanded={isOpen}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="history-year-header">
        <h2 id={`history-year-${year}`} className="heading-xl">{year}</h2>
      </div>
      <div className={`history-items-collapsible ${isOpen ? 'open' : 'closed'}`}>
        <div className="history-items-grid">
          {items.map((item) => (
            <div key={item.id} className="history-item">
              <HistoryItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function History() {
  // ===== Sort Sections =====
  const sections = useMemo(() => [...(historyData.sections || [])].sort((a, b) => b.year - a.year), []);
  const sectionRefs = useRef([]);
  const [openIndices, setOpenIndices] = useState(() => new Set([0, 1].filter((i) => i < sections.length)));

  useEffect(() => {
    let animationFrameId = 0;

    const computeOpenIndices = () => {
      const total = sections.length;
      if (total === 0) return;

      const scrollTop = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const doc = document.documentElement;
      const scrollBottom = scrollTop + viewportHeight;
      const docHeight = Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight);

      const atTop = scrollTop <= 8;
      if (atTop) {
        setOpenIndices(new Set([0, 1].filter((i) => i < total)));
        return;
      }

      const atBottom = scrollBottom >= docHeight - 8;
      if (atBottom) {
        const start = Math.max(0, total - 2);
        setOpenIndices(new Set([start, Math.min(start + 1, total - 1)]));
        return;
      }

      const viewportCenter = scrollTop + viewportHeight * 0.45;
      let bestIndex = 0;
      let bestDistance = Infinity;

      for (let i = 0; i < total; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const absTop = rect.top + scrollTop;
        const center = absTop + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }

      setOpenIndices(new Set([bestIndex, Math.min(bestIndex + 1, total - 1)]));
    };

    const onScrollOrResize = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(() => {
        computeOpenIndices();
        animationFrameId = 0;
      });
    };

    computeOpenIndices();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [sections.length]);

  const scrollSectionIntoCenter = (index) => {
    const el = sectionRefs.current[index];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const absTop = rect.top + scrollTop;
    const targetTop = Math.max(0, absTop - Math.max(0, (viewportHeight - rect.height) / 2));

    const doc = document.documentElement;
    const maxScroll = Math.max(0, Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight) - viewportHeight);

    window.scrollTo({ top: Math.min(targetTop, maxScroll), behavior: 'smooth' });
  };

  const handleSectionClick = (index) => (event) => {
    // Ignore clicks on interactive child elements
    const interactive = event.target.closest && event.target.closest('a,button');
    if (interactive) return;

    // Only act when section is closed
    if (openIndices.has(index)) return;

    // Optimistically open and then scroll to center
    setOpenIndices(new Set([index, Math.min(index + 1, sections.length - 1)]));
    scrollSectionIntoCenter(index);
  };

  return (
    <div className="history-root">
      {sections.map((section, i) => {
        const isClickable = !openIndices.has(i);
        return (
          <Fragment key={section.year}>
            <HistorySection
              year={section.year}
              items={section.items || []}
              isOpen={openIndices.has(i)}
              isClickable={isClickable}
              onClick={handleSectionClick(i)}
              sectionRef={(el) => (sectionRefs.current[i] = el)}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default History;