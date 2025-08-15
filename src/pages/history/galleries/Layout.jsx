import { CDN } from '../../../constants/siteConfig';
import '../../../components/global.css';

const urlFor = (folder, file) => `${CDN}/${encodeURI(`${folder}${file}`)}`;

function GalleryLayout({ data }) {
  return (
    <section className="section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className="section-title text-center" style={{ margin: '0rem 0rem 4rem' }}>{data.year} {data.title}</h1>

      <div className="gallery-grid">
        {data.images.map((file, i) => (
          <figure key={file} className="gallery-item align-center">
            <img
              src={urlFor(data.folder, file)}
              alt={`${data.title}–${i + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 'var(--border-radius-sm)',
                boxShadow: 'var(--shadow-default)',
              }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GalleryLayout;
