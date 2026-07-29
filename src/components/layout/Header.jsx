import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../data/siteContent';

function Header({
  isScrolled,
  menuOpen,
  activeSection,
  onToggleMenu,
  onCloseMenu,
}) {
  const headerRef = useRef(null);
  const whatsappHref = 'https://wa.me/918076556700';

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseMenu();
      }
    };

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        onCloseMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [menuOpen, onCloseMenu]);

  const getLinkClassName = (href, mobile = false) => {
    const isActive = activeSection === href;

    if (mobile) {
      return `text-sm uppercase tracking-luxe transition ${
        isActive
          ? 'font-medium text-espresso'
          : 'text-taupe hover:text-espresso'
      }`;
    }

    return `text-sm uppercase tracking-luxe transition ${
      isActive
        ? 'font-medium text-espresso'
        : 'text-taupe hover:text-espresso'
    }`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <a
        href="#main-content"
        className="sr-only rounded-full bg-espresso px-4 py-2 text-sm uppercase tracking-[0.14em] text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div ref={headerRef}>
        <motion.nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-4 transition-all duration-500 sm:px-7 ${
            isScrolled
              ? 'border-white/35 bg-[rgba(250,246,241,0.72)] shadow-glass backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
          initial={false}
          animate={{ y: isScrolled ? 0 : 4 }}
        >
          <a
            href="#top"
            className="shrink-0 whitespace-nowrap font-display text-2xl tracking-[0.12em] text-espresso sm:text-3xl"
          >
            Orchid Design
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href ? 'page' : undefined}
                className={getLinkClassName(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 lg:block">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/65 text-[#1f8a4c] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              aria-label="Chat with us on WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.09.55 4.13 1.6 5.92L0 24l6.32-1.66a11.86 11.86 0 0 0 5.67 1.44h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.18-3.38-8.4Zm-8.48 18.28h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.66-.23-.37A9.86 9.86 0 0 1 2.14 11.9c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.11 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.44 9.86-9.88 9.86Zm5.75-7.41c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.16.21 2.11 3.22 5.1 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.28-.2-.59-.36Z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/50 text-espresso backdrop-blur-md lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={onToggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span
                className={`block h-px w-5 bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span className={`block h-px w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block h-px w-5 bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </motion.nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-[2rem] border border-white/35 bg-[rgba(247,242,236,0.88)] p-6 shadow-glass backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                    className={getLinkClassName(link.href, true)}
                    onClick={onCloseMenu}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/65 text-[#1f8a4c] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                  aria-label="Chat with us on WhatsApp"
                  onClick={onCloseMenu}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.09.55 4.13 1.6 5.92L0 24l6.32-1.66a11.86 11.86 0 0 0 5.67 1.44h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.18-3.38-8.4Zm-8.48 18.28h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.66-.23-.37A9.86 9.86 0 0 1 2.14 11.9c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.11 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.44 9.86-9.88 9.86Zm5.75-7.41c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.16.21 2.11 3.22 5.1 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.28-.2-.59-.36Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>    </header>
  );
}

export default Header;
