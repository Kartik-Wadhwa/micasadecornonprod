import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function WorkModal({ activeWork, onClose }) {
  const dialogRef = useRef(null);

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
  }, [activeWork, onClose]);

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
              <div className="relative h-40 bg-[#e7ddd3] sm:h-48 md:h-full">
                <img
                  src={activeWork.image}
                  alt={`${activeWork.title} interior project`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,9,7,0.06),rgba(12,9,7,0.38))]" />
              </div>

              <div className="flex min-w-0 flex-col justify-between p-5 sm:p-6 lg:p-8">
                <div>
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
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default WorkModal;
