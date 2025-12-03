import { CDN } from '../../../constants/siteConfig';
import '../../../components/global.css';
import { useState, useEffect } from 'react';
import Lightbox from '../../../components/Lightbox/Lightbox';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px is typical tablet/desktop breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Filter out non-image items for the lightbox navigation
  const lightboxImages = data.images
    .filter(file => isImage(file))
    .map(file => urlFor(data.folder, file));

  // Map original indices to lightbox indices
  const getLightboxIndex = (originalIndex) => {
    const imageFile = data.images[originalIndex];
    if (!isImage(imageFile)) return -1;

    let count = 0;
    for (let i = 0; i < originalIndex; i++) {
      if (isImage(data.images[i])) count++;
    }
    return count;
  };

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
                onClick={() => openLightbox(getLightboxIndex(i))}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  borderRadius: 'var(--border-radius-sm)',
                  boxShadow: 'var(--shadow-default)',
                  cursor: 'pointer',
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

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={currentImageIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

export default GalleryLayout;
