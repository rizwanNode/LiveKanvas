'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const Footer = ({ blok }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      {...(blok ? storyblokEditable(blok) : {})}
      className="relative bg-[#0c0c0c] border-t border-white/5"
    >
      {/* Top CTA Section (Keep if needed, or hide if exact match to only bottom part) */}
      {/* <div className="bg-gradient-to-r from-[#e2283f] to-[#aa1d2f] py-16">
        <div className="container-lk">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-[36px] font-bold text-white mb-2 leading-tight">
                Start exploring, creating, and connecting!
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                Experience the next evolution of content creation and live streaming.
              </p>
            </div>
            <Link 
              href="/pre-order" 
              className="bg-[#e2283f] border-2 border-white text-white px-10 py-4 rounded-[20px] text-xl font-bold hover:bg-white hover:text-[#e2283f] transition-all whitespace-nowrap"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content (Faithful to 336 mockup) */}
      <div className="container-lk pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/kanvas/2025_Live%20Kanvas%20Cir%20SQ-06%209.png"
              alt="Live Kanvas"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link href="/about-us" className="text-white/60 hover:text-white transition-colors text-base font-medium">About Us</Link>
            <Link href="/creators" className="text-white/60 hover:text-white transition-colors text-base font-medium">Creators</Link>
            <Link href="/contact-us" className="text-white/60 hover:text-white transition-colors text-base font-medium">Contact Us</Link>
            <Link href="/blog" className="text-white/60 hover:text-white transition-colors text-base font-medium">Blog</Link>
            <Link href="/help-center" className="text-white/60 hover:text-white transition-colors text-base font-medium">Help Center</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-white/60 text-sm font-medium mr-2">Follow us on</span>
            {[
              { name: 'Facebook', icon: '/images/kanvas/Facebook.png' },
              { name: 'X', icon: '/images/kanvas/X.png' },
              { name: 'Instagram', icon: '/images/kanvas/Instagram.png' },
              { name: 'LinkedIn', icon: '/images/kanvas/LinkedIn.png' }
            ].map((s) => (
              <a
                key={s.name}
                href="#"
                className="w-10 h-10 rounded-[10px] bg-[#d9d9d9] flex items-center justify-center hover:bg-white hover:scale-105 transition-all shadow-sm"
              >
                <img 
                  src={s.icon} 
                  alt={s.name} 
                  className="w-6 h-6 object-contain brightness-0"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <p className="text-white/40 text-[13px]">
            {currentYear} LiveKanvas. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-[13px]">Privacy Statement</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-[13px]">Terms of Service</Link>
            <Link href="/cookies" className="text-white/40 hover:text-white transition-colors text-[13px]">Cookies Policy</Link>
            <button className="text-white/40 hover:text-white transition-colors text-[13px]">Cookies Preferences</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
