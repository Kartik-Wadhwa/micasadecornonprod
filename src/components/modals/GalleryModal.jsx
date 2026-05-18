import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const swipeConfidenceThreshold = 120;

function handleSwipe(offset, velocity) {
  return Math.abs(offset) * velocity;
}

function GalleryModal({
  activeGallery,
  activeGalleryIndex,
  onClose,
  onNext,
  onPrevious,
  onSelectIndex,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!activeGallery) {
      return undefined;
    }

    const previouslyFocused = document.activeElement;
    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'ArrowRight') {
        onNext();
        return;
      }

      if (event.key === 'ArrowLeft') {
        onPrevious();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [activeGallery, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {activeGallery ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(15,11,9,0.55)] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            className="flex max-h-[calc(100vh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-[rgba(255,250,245,0.96)] shadow-glass"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            tabIndex={-1}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#d2c5b8] px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-accent">
                  {activeGallery.label}
                </p>
                <h3
                  id="gallery-modal-title"
                  className="mt-2 font-display text-3xl text-espresso"
                >
                  {activeGallery.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
              >
                Close
              </button>
            </div>

            <motion.div
              className="relative bg-[#e1dad2] touch-pan-y"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                const swipe = handleSwipe(info.offset.x, info.velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  onNext();
                  return;
                }

                if (swipe > swipeConfidenceThreshold) {
                  onPrevious();
                }
              }}
            >
              <motion.img
                key={activeGallery.images[activeGalleryIndex].src}
                src={activeGallery.images[activeGalleryIndex].src}
                alt={activeGallery.images[activeGalleryIndex].alt}
                className="h-[min(42vh,20rem)] w-full object-contain sm:h-[min(50vh,26rem)]"
                loading="eager"
                initial={{ opacity: 0.55, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.55, x: -24 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0)_40%,rgba(10,8,7,0.15)_100%)]" />
              <div className="absolute bottom-4 right-4 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-espresso">
                {activeGalleryIndex + 1} / {activeGallery.images.length}
              </div>
            </motion.div>

            <div className="overflow-y-auto border-t border-[#d2c5b8] px-6 py-5">
              <div className="flex gap-3 overflow-x-auto pb-1 sm:justify-center">
                {activeGallery.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`overflow-hidden rounded-2xl border transition ${
                      index === activeGalleryIndex
                        ? 'border-espresso shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={index === activeGalleryIndex}
                    onClick={() => onSelectIndex(index)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="h-14 w-14 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                >
                  Prev
                </button>
                <div className="text-center text-xs uppercase tracking-[0.16em] text-taupe">
                  Swipe, use arrow keys, or tap a thumbnail
                </div>
                <button
                  type="button"
                  onClick={onNext}
                  className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default GalleryModal;
