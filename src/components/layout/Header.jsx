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
            Mi Casa Decor
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
            <a href="#inquiry" className="button-primary">
              Book a Consultation
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
                  href="#inquiry"
                  className="button-primary mt-2 justify-center text-center"
                  onClick={onCloseMenu}
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>    </header>
  );
}

export default Header;
