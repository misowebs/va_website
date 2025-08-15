import { CDN } from '../../../constants/siteConfig';
import '../../../components/global.css';
import { useState, useEffect } from 'react';

const urlFor = (folder, file) => `${CDN}/${encodeURI(`${folder}${file}`)}`;

// Helper function to check if file is a video
const isVideo = (filename) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

// Helper function to check if file is an image
const isImage = (filename) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.heic'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

function GalleryLayout({ data }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px is typical tablet/desktop breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className="section-title text-center" style={{ margin: '0rem 0rem 4rem' }}>{data.title} {data.year}</h1>

      <div className="gallery-grid">
        {data.images.map((file, i) => (
          <figure key={file} className="gallery-item align-center">
            {isVideo(file) ? (
              <video
                src={urlFor(data.folder, file)}
                controls
                muted
                autoPlay={isLargeScreen}
                preload="metadata"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 'var(--border-radius-sm)',
                  boxShadow: 'var(--shadow-default)',
                }}
              >
                Your browser does not support the video tag.
              </video>
            ) : isImage(file) ? (
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
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f5f5f5',
                  borderRadius: 'var(--border-radius-sm)',
                  border: '2px dashed #ccc',
                }}
              >
                <p style={{ margin: 0, color: '#666' }}>Unsupported file type: {file}</p>
              </div>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GalleryLayout;
