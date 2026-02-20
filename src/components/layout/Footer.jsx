'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

        {/* Top Separator Line */}
        <div className="w-full h-[1px] bg-white/20 mb-20 md:mb-24" />
        <div className='flex flex-col gap-10' >
          <div className='flex items-center justify-between' >
            <div>
              <Link href="/" className="shrink-0 mb-6">
                <img
                  src="/images/logo.png"
                  alt="Live Kanvas"
                  className="h-10 md:h-[50px] w-auto object-contain"
                />
              </Link>
            </div>
            <div className='flex gap-20 items-center h-[100%]' >
              <div className='flex gap-10' >
                <Link href="/about-us" className="text-white font-semibold text-base md:text-[18px] hover:text-[#E2283F] transition-colors whitespace-nowrap">
                  About Us
                </Link>
                <Link href="/creators" className="text-white font-semibold text-base md:text-[18px] hover:text-[#E2283F] transition-colors whitespace-nowrap">
                  Creators
                </Link>
                <Link href="/contact-us" className="text-white font-semibold text-base md:text-[18px] hover:text-[#E2283F] transition-colors whitespace-nowrap">
                  Contact Us
                </Link>
                <Link href="/blog" className="text-white font-semibold text-base md:text-[18px] hover:text-[#E2283F] transition-colors whitespace-nowrap">
                  Blog
                </Link>
                <Link href="/help-center" className="text-white font-semibold text-base md:text-[18px] hover:text-[#E2283F] transition-colors whitespace-nowrap">
                  Help Center
                </Link>
              </div>
              <div className="flex flex-col gap-2" >
                <div >
                  <span className="text-white text-base md:text-[18px] font-medium">Follow us on</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {[
                    { name: 'Facebook', icon: '/images/kanvas/Facebook.png' },
                    { name: 'X', icon: '/images/kanvas/X.png' },
                    { name: 'Instagram', icon: '/images/kanvas/Instagram.png' },
                    { name: 'LinkedIn', icon: '/images/kanvas/LinkedIn.png' }
                  ].map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      className="w-9 h-9 md:w-[42px] md:h-[42px] bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors group"
                    >
                      <img
                        src={s.icon}
                        alt={s.name}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain brightness-0 group-hover:scale-105 transition-transform"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className='flex justify-between' >
            <p className="text-white text-[10px] md:text-[13px] font-normal whitespace-nowrap opacity-80 mt-auto">
              2025 LiveKanvas. All rights reserved.
            </p>
            <div className='flex gap-15' >
              <Link href="/privacy" className="text-white/60 text-[10px] md:text-[13px] hover:text-white underline underline-offset-4 decoration-white/20 transition-colors whitespace-nowrap mt-auto">
                Privacy Statement
              </Link>
              <Link href="/terms" className="text-white/60 text-[10px] md:text-[13px] hover:text-white underline underline-offset-4 decoration-white/20 transition-colors whitespace-nowrap mt-auto">
                Terms of Service
              </Link>

              <Link href="/cookies" className="text-white/60 text-[10px] md:text-[13px] hover:text-white underline underline-offset-4 decoration-white/20 transition-colors whitespace-nowrap mt-auto">
                Cookies Policy
              </Link>
              <Link href="/cookiespreferences" className="text-white/60 text-[10px] md:text-[13px] hover:text-white underline underline-offset-4 decoration-white/20 transition-colors whitespace-nowrap mt-auto">
                Cookies Preferences
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;