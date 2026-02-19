import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const Footer = ({ blok }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      {...(blok ? storyblokEditable(blok) : {})}
      className="relative bg-lk-dark"
    >
      {/* Top CTA Section - two column layout */}
      <div className="red-gradient-section py-16">
        <div className="container-lk">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left column - CTA + email */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-[40px] md:leading-tight font-bold text-white mb-3">
                {blok?.cta_title || 'Start exploring, creating, and connecting!'}
              </h3>
              <p className="text-lk-white-65 text-base md:text-[24px] mb-6 max-w-lg">
                {blok?.cta_subtitle ||
                  'Experience the next evolution of content creation and live streaming.'}
              </p>

              <p className="text-sm md:text-[24px] text-white font-medium mb-3">
                Sign up now for special updates!
              </p>
              <div className="flex gap-2 mb-4 max-w-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-lk-gray-40 rounded-[25px] text-white placeholder:text-lk-white-40 focus:outline-none focus:ring-2 focus:ring-lk-red transition-colors text-base md:text-[24px]"
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-lk-white-65 mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-lk-gray-25 bg-lk-gray-15"
                />
                I agree to receive other communications from Live Kanvas.
              </label>
              <button className="btn-primary px-8 py-4 text-base md:text-[24px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-semibold">
                Subscribe Now
              </button>
            </div>

            {/* Right column - Download app */}
            <div className="flex-shrink-0 lg:text-right">
              <h4 className="text-2xl md:text-[40px] md:leading-tight font-semibold text-white mb-2">
                Download the App <span className="font-bold">Now!</span>
              </h4>
              <div className="flex gap-3 lg:justify-end mt-4">
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 bg-black border border-lk-gray-25 rounded-lg hover:border-white/40 transition-colors">
                  <svg width="20" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60 leading-none">Download on the</p>
                    <p className="text-sm font-semibold text-white leading-tight">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 bg-black border border-lk-gray-25 rounded-lg hover:border-white/40 transition-colors">
                  <svg width="20" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60 leading-none">GET IT ON</p>
                    <p className="text-sm font-semibold text-white leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="border-t border-lk-gray-15">
        <div className="container-lk py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo-alt.png"
                alt="Live Kanvas"
                className="h-10 w-auto"
              />
            </Link>

            {/* Nav links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-[20px]">
              <Link
                href="/about-us"
                className="text-lk-white-65 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/creators"
                className="text-lk-white-65 hover:text-white transition-colors"
              >
                Creators
              </Link>
              <Link
                href="/contact-us"
                className="text-lk-white-65 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-lk-white-65 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/help-center"
                className="text-lk-white-65 hover:text-white transition-colors"
              >
                Help Center
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm text-lk-white-48 mr-1">Follow us on</span>
              {[
                { name: 'Facebook', icon: '/images/kanvas/Facebook.png' },
                { name: 'X', icon: '/images/kanvas/X.png' },
                { name: 'Instagram', icon: '/images/kanvas/Instagram.png' },
                { name: 'LinkedIn', icon: '/images/kanvas/LinkedIn.png' }
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-11 h-11 rounded-[10px] bg-[#d9d9d9] flex items-center justify-center hover:bg-white transition-all shadow-sm"
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

          {/* Legal links */}
          <div className="border-t border-lk-gray-15 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-lk-white-48">
              {currentYear} LiveKanvas. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-lk-white-48">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Statement
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookies Policy
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Cookies Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
