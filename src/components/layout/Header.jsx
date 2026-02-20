'use client';

import { useState, useEffect } from 'react';
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
  { label: 'About Us', href: '/about-us' },
  { label: 'Pre Order', href: '/pre-order' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Faq', href: '/faq' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'Creator Community', href: '/creators' },
  { label: 'News Center', href: '/news-center' },
];

const Header = ({ blok, transparent = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const logoSrc = blok?.logo?.filename || DEFAULT_KANVAS_LOGO;

  return (
    <>
      <header
        {...(blok ? storyblokEditable(blok) : {})}
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          scrolled || !transparent
            ? 'bg-lk-dark/85 backdrop-blur-lg border-b border-white/5 py-1.5 md:py-2'
            : 'bg-transparent py-2.5 md:py-3 lg:py-4'
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-10 lg:px-[10%]">
          <Link href="/" className="z-10">
            <img
              className={`transition-all duration-300 ${
                scrolled || !transparent
                  ? 'w-[40px] md:w-[60px] lg:w-[85px]'
                  : 'w-[50px] md:w-[80px] lg:w-[110px]'
              } h-auto object-cover`}
              alt="Live Kanvas"
              src={logoSrc}
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
            <Link
              href="/"
              className="hidden md:block font-[family-name:var(--font-lato)] font-medium text-white text-base md:text-lg hover:text-[#e2283f] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/sign-in"
              className="hidden md:inline-flex items-center justify-center bg-[#e2283f] rounded-[20px] shadow-[0px_4px_10px_rgba(226,40,63,0.3)] px-4 md:px-5 lg:px-6 py-1.5 md:py-2 font-[family-name:var(--font-lato)] font-bold text-white text-base md:text-lg hover:bg-[#c01f37] transition-all hover:scale-105 active:scale-95"
            >
              Sign In
            </Link>
            <button 
              onClick={() => setMenuOpen(true)} 
              aria-label="Open menu"
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <img
                className="w-6 md:w-8 lg:w-[32px] h-auto"
                alt="Menu"
                src={MENU_ICON}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Sidebar Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-[#0c0c0c] transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-8 md:px-12 lg:px-[10%] pt-8 pb-10">
          <div className="flex items-center justify-between mb-4 shrink-0">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                className="w-[70px] md:w-[90px] lg:w-[110px] h-auto object-cover"
                alt="Live Kanvas"
                src={logoSrc}
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center py-2">
            <nav className="flex flex-col gap-1 md:gap-1.5 max-w-4xl">
              {NAV_LINKS.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-3 font-[family-name:var(--font-lato)] font-bold text-white text-lg md:text-xl lg:text-2xl hover:text-[#e2283f] transition-all"
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 shrink-0">
            <div className="flex items-center gap-5">
              {SOCIAL_ICONS.map((s) => (
                <a 
                  key={s.name} 
                  href={s.href} 
                  className="w-10 h-10 rounded-[12px] bg-[#d9d9d9] flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-md" 
                  onClick={() => setMenuOpen(false)}
                >
                  <img className="w-10 h-10 object-contain brightness-0" alt={s.name} src={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;