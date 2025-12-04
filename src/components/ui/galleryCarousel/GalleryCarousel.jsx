import React, { useEffect, useRef, useState } from 'react';
import './GalleryCarousel.css';

function GalleryCarousel({ images, altPrefix = 'Gallery image' }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <div className="gallery-carousel">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`${altPrefix} ${idx + 1}`}
            className={`carousel-img${idx === current ? ' active' : ''}`}
            style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
          />
        ))}
      </div>
      <div className="carousel-dots-wrapper">
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryCarousel;
