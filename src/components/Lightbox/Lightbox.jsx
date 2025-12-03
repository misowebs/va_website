import { useEffect, useCallback, useState } from 'react';
import './Lightbox.css';

function Lightbox({ images, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const handleNext = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [handleNext, handlePrev, onClose]);

    // Swipe handlers
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('lightbox-overlay') || e.target.classList.contains('lightbox-content')) {
            onClose();
        }
    };

    return (
        <div
            className="lightbox-overlay"
            onClick={handleOverlayClick}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                &times;
            </button>

            <button className="lightbox-nav lightbox-prev" onClick={handlePrev} aria-label="Previous image">
                &#10094;
            </button>

            <div className="lightbox-content">
                <img
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    className="lightbox-image"
                />
            </div>

            <button className="lightbox-nav lightbox-next" onClick={handleNext} aria-label="Next image">
                &#10095;
            </button>
        </div>
    );
}

export default Lightbox;
