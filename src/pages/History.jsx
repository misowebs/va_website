import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import historyData from './Gallery/JSON-Files/HistorySections.json';

function isInternalLink(url) {
  return typeof url === 'string' && url.startsWith('/');
}

function HistoryItem({ item }) {
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

  // default: image
  const image = (
    <figure className="history-item-image-figure">
      <img className="history-item-image" src={item.src} alt={item.alt || item.title || ''} />
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

function HistorySection({ year, items }) {
  return (
    <section className="section history-year-section box-lined" aria-labelledby={`history-year-${year}`}>
      <div className="history-year-header">
        <h2 id={`history-year-${year}`} className="heading-xl">{year}</h2>
      </div>
      <div className="history-items-grid">
        {items.map((item) => (
          <div key={item.id} className="history-item">
            <HistoryItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function History() {
  const sections = [...(historyData.sections || [])].sort((a, b) => b.year - a.year);

  return (
    <div className="history-root">
      {sections.map((section) => (
        <Fragment key={section.year}>
          <HistorySection year={section.year} items={section.items || []} />
        </Fragment>
      ))}
    </div>
  );
}

export default History;