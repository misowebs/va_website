import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import historyData from '../../data/HistorySections.json';
import { CDN } from '../../constants/siteConfig';

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
  const [openIndex, setOpenIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1025);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    let animationFrameId = 0;

    const computeOpenIndex = () => {
      const total = sections.length;
      if (total === 0) return;

      const scrollTop = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const doc = document.documentElement;
      const scrollBottom = scrollTop + viewportHeight;
      const docHeight = Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight);

      const atTop = scrollTop <= 8;
      if (atTop) {
        setOpenIndex(0);
        return;
      }

      const atBottom = scrollBottom >= docHeight - 8;
      if (atBottom) {
        setOpenIndex(Math.max(0, total - 1));
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

      setOpenIndex(bestIndex);
    };

    const onScrollOrResize = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(() => {
        computeOpenIndex();
        animationFrameId = 0;
      });
    };

    computeOpenIndex();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [sections.length]);

  const handleSectionClick = (index) => (event) => {
    // Ignore clicks on interactive child elements
    const interactive = event.target.closest && event.target.closest('a,button');
    if (interactive) return;

    // Only act when section is closed
    if (openIndex === index) return;

    // Open without auto-centering
    setOpenIndex(index);
  };

  // Function to determine if a section should be open
  const isSectionOpen = (index) => {
    if (!isLargeScreen) {
      // Mobile behavior: only one section open at a time
      return openIndex === index;
    } else {
      // Large screen behavior: show two sections open
      return index === openIndex || index === openIndex + 1;
    }
  };

  return (
    <div className="history-root">
      {/* Page Header */}
      <div className="section text-center">
        <div className="stack-lg">
          <h1 className="heading-xl">Our History</h1>
          <p className="text-lg max-w-prose" style={{ margin: '0 auto' }}>
            Our journey has been fueled by the dedication of our members and the generous support of our donors, who believe in the power of cultural exchange and education. Over the years, each executive team has brought unique insights and enthusiasm, driving the organization forward. These leaders have ensured that, despite the geographical distance, the spirit of Venezuela thrives in Oklahoma.
          </p>
        </div>
      </div>
      
      {sections.map((section, i) => {
        const isClickable = !isSectionOpen(i);
        return (
          <Fragment key={section.year}>
            <HistorySection
              year={section.year}
              items={section.items || []}
              isOpen={isSectionOpen(i)}
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