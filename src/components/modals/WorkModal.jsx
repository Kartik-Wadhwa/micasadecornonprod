import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function WorkModal({ activeWork, onClose }) {
  const dialogRef = useRef(null);
  const [activeView, setActiveView] = useState('overview');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = activeWork?.gallery ?? [];
  const hasGallery = galleryImages.length > 0;
  const isGalleryView = activeView === 'gallery' && hasGallery;
  const galleryImage = hasGallery ? galleryImages[activeGalleryIndex] : null;
  const displayImage =
    isGalleryView && galleryImage
      ? galleryImage
      : {
          src: activeWork?.image,
          alt: activeWork ? `${activeWork.title} interior project` : '',
        };

  useEffect(() => {
    if (!activeWork) {
      return;
    }

    setActiveView('overview');
    setActiveGalleryIndex(0);
  }, [activeWork]);

  useEffect(() => {
    if (!activeWork) {
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

      if (activeView === 'gallery' && hasGallery) {
        if (event.key === 'ArrowRight') {
          setActiveGalleryIndex((index) => (index + 1) % galleryImages.length);
          return;
        }

        if (event.key === 'ArrowLeft') {
          setActiveGalleryIndex(
            (index) => (index - 1 + galleryImages.length) % galleryImages.length,
          );
          return;
        }
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
  }, [activeView, activeWork, galleryImages.length, hasGallery, onClose]);

  return (
    <AnimatePresence>
      {activeWork ? (
        <motion.div
          className="fixed inset-0 z-[65] flex items-center justify-center bg-[rgba(15,11,9,0.45)] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            className="max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-x-hidden overflow-y-auto rounded-[2rem] border border-white/50 bg-[rgba(255,250,245,0.97)] shadow-glass md:h-[min(44rem,calc(100vh-2rem))] md:overflow-y-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            tabIndex={-1}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid min-w-0 md:h-full md:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
              <div
                className={`relative overflow-hidden bg-[#e7ddd3] ${
                  isGalleryView ? 'h-56 sm:h-72 md:h-full' : 'h-40 sm:h-48 md:h-full'
                }`}
              >
                {isGalleryView ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.94),rgba(223,210,198,0.9)_48%,rgba(205,191,178,0.88)_100%)]" />
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.img
                    key={displayImage.src}
                    src={displayImage.src}
                    alt={displayImage.alt}
                    className={`max-h-full max-w-full ${
                      isGalleryView
                        ? 'h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-contain sm:h-[calc(100%-3rem)] sm:w-[calc(100%-3rem)] md:h-[calc(100%-4rem)] md:w-[calc(100%-4rem)]'
                        : 'h-full w-full object-cover'
                    }`}
                    loading="eager"
                    initial={{ opacity: 0.55, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,9,7,0.06),rgba(12,9,7,0.38))]" />
                {isGalleryView ? (
                  <div className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-full border border-white/10 bg-[rgba(22,17,13,0.88)] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white shadow-lg">
                    {activeGalleryIndex + 1} / {galleryImages.length}
                  </div>
                ) : null}
              </div>

              <div className="relative flex min-h-0 flex-col overflow-hidden p-5 sm:p-6 lg:p-8">
                <div className="min-h-0 flex-1 overflow-y-auto pb-28 sm:pb-24 md:pb-28 md:pr-2">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-accent">
                        {activeWork.type}
                      </p>
                      <h3
                        id="work-modal-title"
                        className="mt-3 font-display text-2xl leading-none text-espresso sm:text-3xl lg:text-4xl"
                      >
                        {activeWork.title}
                      </h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.16em] text-taupe">
                        {activeWork.location}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveView('overview')}
                      className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                        activeView === 'overview'
                          ? 'bg-espresso text-white'
                          : 'border border-espresso/20 bg-white/80 text-espresso hover:bg-white'
                      }`}
                      aria-pressed={activeView === 'overview'}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      onClick={() => hasGallery && setActiveView('gallery')}
                      className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                        activeView === 'gallery'
                          ? 'bg-espresso text-white'
                          : 'border border-espresso/20 bg-white/80 text-espresso hover:bg-white'
                      } ${hasGallery ? '' : 'cursor-not-allowed opacity-50'}`}
                      aria-pressed={activeView === 'gallery'}
                      disabled={!hasGallery}
                    >
                      Gallery
                    </button>
                  </div>

                  {activeView === 'overview' ? (
                    <>
                      <p className="mt-5 text-sm leading-7 text-taupe sm:text-base">
                        {activeWork.summary}
                      </p>

                      <div className="mt-6 border-t border-[#d8ccc0] pt-5">
                        <p className="text-xs uppercase tracking-[0.16em] text-accent">
                          Project Approach
                        </p>
                        <ul className="mt-4 space-y-2.5 text-sm leading-6 text-taupe">
                          {activeWork.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="mt-6 border-t border-[#d8ccc0] pt-5">
                      <p className="text-xs uppercase tracking-[0.16em] text-accent">
                        Project Gallery
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {galleryImages.map((image, index) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => setActiveGalleryIndex(index)}
                            className={`overflow-hidden rounded-[1.25rem] border transition ${
                              index === activeGalleryIndex
                                ? 'border-espresso shadow-sm'
                                : 'border-transparent opacity-80 hover:opacity-100'
                            }`}
                            aria-label={`View gallery image ${index + 1}`}
                            aria-pressed={index === activeGalleryIndex}
                          >
                            <img
                              src={image.src}
                              alt=""
                              className="h-20 w-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </button>
                        ))}
                      </div>

                      <p className="mt-4 text-sm leading-6 text-taupe">
                        {galleryImage?.alt}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveGalleryIndex(
                              (index) => (index - 1 + galleryImages.length) % galleryImages.length,
                            )
                          }
                          className="rounded-full border border-espresso/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                        >
                          Prev
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveGalleryIndex(
                              (index) => (index + 1) % galleryImages.length,
                            )
                          }
                          className="rounded-full border border-espresso/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute inset-x-5 bottom-5 z-10 border-t border-[#d8ccc0] bg-[rgba(255,250,245,0.96)] pt-6 sm:inset-x-6 sm:bottom-6 lg:inset-x-8 lg:bottom-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href="#inquiry"
                      className="button-primary px-4 py-2 text-xs tracking-[0.14em] sm:px-5"
                      onClick={onClose}
                    >
                      Start a Similar Project
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="button-secondary border-espresso/20 bg-white/70 px-4 py-2 text-xs tracking-[0.14em] text-espresso hover:bg-white sm:px-5"
                    >
                      Continue Browsing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default WorkModal;
