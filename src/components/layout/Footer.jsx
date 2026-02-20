'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/kanvas/2025_Live%20Kanvas%20Cir%20SQ-06%209.png"
              alt="Live Kanvas"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/about-us" className="text-white font-medium text-base hover:text-[#E2283F] transition-colors">
              About Us
            </Link>
            <Link href="/creators" className="text-white font-medium text-base hover:text-[#E2283F] transition-colors">
              Creators
            </Link>
            <Link href="/contact-us" className="text-white font-medium text-base hover:text-[#E2283F] transition-colors">
              Contact Us
            </Link>
            <Link href="/blog" className="text-white font-medium text-base hover:text-[#E2283F] transition-colors">
              Blog
            </Link>
            <Link href="/help-center" className="text-white font-medium text-base hover:text-[#E2283F] transition-colors">
              Help Center
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-white text-base">Follow us on</span>
            <div className="flex items-center gap-3">
              {[
                { name: 'Facebook', icon: '/images/kanvas/Facebook.png' },
                { name: 'X', icon: '/images/kanvas/X.png' },
                { name: 'Instagram', icon: '/images/kanvas/Instagram.png' },
                { name: 'LinkedIn', icon: '/images/kanvas/LinkedIn.png' }
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="w-5 h-5 object-contain brightness-0"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm">
            {currentYear} LiveKanvas. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/privacy" className="text-white/50 text-sm hover:text-white underline underline-offset-4 decoration-white/30 transition-colors">
              Privacy Statement
            </Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-white underline underline-offset-4 decoration-white/30 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/50 text-sm hover:text-white underline underline-offset-4 decoration-white/30 transition-colors">
              Cookies Policy
            </Link>
            <button className="text-white/50 text-sm hover:text-white underline underline-offset-4 decoration-white/30 transition-colors">
              Cookies Preferences
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;