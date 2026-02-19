'use client';

import { useState } from 'react';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';

const KANVAS_IMG = '/images/kanvas';
const DEFAULT_KANVAS_LOGO = `${KANVAS_IMG}/2025_Live%20Kanvas%20Cir%20SQ-06%209.png`;
const MENU_ICON = `${KANVAS_IMG}/Menu.png`;
const SOCIAL_ICONS = [
  { icon: `${KANVAS_IMG}/Facebook.png`, name: 'Facebook', href: '#' },
  { icon: `${KANVAS_IMG}/X.png`, name: 'X', href: '#' },
  { icon: `${KANVAS_IMG}/Instagram.png`, name: 'Instagram', href: '#' },
  { icon: `${KANVAS_IMG}/LinkedIn.png`, name: 'LinkedIn', href: '#' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Creators', href: '/creators' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Help Center', href: '/help-center' },
];

const Header = ({ blok, transparent = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (transparent) {
    const logoSrc = blok?.logo?.filename || DEFAULT_KANVAS_LOGO;

    return (
      <>
        <header
          {...(blok ? storyblokEditable(blok) : {})}
          className="relative z-10 w-full"
        >
          <nav className="flex items-center justify-between px-5 md:px-10 lg:px-[10%] py-3 md:py-4 lg:pt-[17px] lg:pb-0">
            <Link href="/" className="z-10">
              <img
                className="w-[60px] md:w-[90px] lg:w-[132px] h-auto object-cover"
                alt="Live Kanvas"
                src={logoSrc}
              />
            </Link>

            <div className="flex items-center gap-3 md:gap-5 lg:gap-6">
              <Link
                href="/"
                className="hidden md:block font-[family-name:var(--font-lato)] font-normal text-white text-base md:text-lg lg:text-xl hover:text-[#e2283f] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/sign-in"
                className="hidden md:inline-flex items-center justify-center bg-[#e2283f] rounded-[20px] border border-black shadow-[0px_4px_4px_#00000040] px-4 md:px-5 lg:px-7 py-1.5 lg:py-2.5 font-[family-name:var(--font-lato)] font-bold text-white text-base md:text-lg lg:text-xl hover:bg-[#c01f37] transition-colors"
              >
                Sign In
              </Link>
              <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <img
                  className="w-7 md:w-9 lg:w-[46px] h-auto"
                  alt="Menu"
                  src={MENU_ICON}
                />
              </button>
            </div>
          </nav>
        </header>

        {/* Full-screen menu overlay */}
        <div
          className={`fixed inset-0 bg-[#181818]/98 backdrop-blur-md z-[100] transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
        >
          <div className="flex flex-col h-full px-8 md:px-12 pt-8 pb-10">
            <div className="flex items-center justify-between mb-12">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <img
                  className="w-[90px] md:w-[130px] lg:w-[190px] h-auto object-cover"
                  alt="Live Kanvas"
                  src={logoSrc}
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 md:gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-[family-name:var(--font-lato)] font-semibold text-white text-2xl md:text-3xl lg:text-4xl hover:text-[#e2283f] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex items-center gap-4">
              {SOCIAL_ICONS.map((s) => (
                <a key={s.name} href={s.href} className="hover:opacity-80 transition-opacity" onClick={() => setMenuOpen(false)}>
                  <img className="w-8 h-8 md:w-10 md:h-10 object-contain" alt={s.name} src={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ── Default (fixed) header for all other pages ── */
  return (
    <header
      {...(blok ? storyblokEditable(blok) : {})}
      className="fixed top-0 left-0 right-0 z-50 bg-lk-dark/80 backdrop-blur-md border-b border-lk-gray-15"
    >
      <div className="container-lk flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 z-10">
          {blok?.logo?.filename ? (
            <img
              src={blok.logo.filename}
              alt="Live Kanvas"
              className="h-10 w-auto"
            />
          ) : (
            <img
              src="/images/logo-alt.png"
              alt="Live Kanvas"
              className="h-10 w-auto"
            />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-white hover:text-lk-red transition-colors"
          >
            Home
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="hidden md:inline-flex items-center px-5 py-2 bg-lk-red text-white text-sm font-semibold rounded-lg hover:bg-lk-red-dark transition-colors"
          >
            Sign In
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 bg-lk-dark z-40 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-10 pt-24">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)} className="mb-12">
            <img
              src="/images/logo-alt.png"
              alt="Live Kanvas"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-lk-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
