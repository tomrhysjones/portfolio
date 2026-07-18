import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { navLinks } from '../data/navigation';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-ink-950/70 border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-narrow">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-24 sm:h-28' : 'h-32 sm:h-40'
          }`}
          aria-label="Primary"
        >
          <a
            href="#top"
            className="group inline-flex items-center gap-3 font-medium text-parchment-50 transition"
            aria-label={`${siteConfig.name} — home`}
          >
            <Logo
              className={`w-auto transition-all duration-300 ${
                scrolled ? 'h-20 sm:h-24' : 'h-28 sm:h-32'
              } group-hover:opacity-90`}
              ariaLabel="TRJ monogram"
            />
            <span className="hidden sm:inline text-base sm:text-lg tracking-tight text-parchment-100">
              Tom Rhys Jones
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-parchment-200 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href={siteConfig.cv} download className="btn-primary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-parchment-100"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur"
          >
            <div className="container-narrow py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-base text-parchment-100 transition hover:bg-white/[0.04]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <a
                    href={siteConfig.cv}
                    download
                    onClick={closeMenu}
                    className="btn-primary w-full"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
