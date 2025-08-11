import data from '../JSON-Files/FeriaDeLaChinita2004.json'; // adjust path if needed
const CDN = import.meta.env.VITE_CDN_BASE;

const urlFor = (file) => `${CDN}/${encodeURI(`${data.folder}${file}`)}`;

function FeriaDeLaChinita2004() {
  return (
    <section className="section">
      <h1 className="section-title">{data.year} {data.title}</h1>

      <div className="gallery-grid">
        {data.images.map((file, i) => (
          <figure key={file} className="gallery-item">
            <img
              src={urlFor(file)}
              alt={`${data.title}–${i + 1}`}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default FeriaDeLaChinita2004;