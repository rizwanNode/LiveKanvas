'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const IMG = '/images/kanvas';
const noiseTexture = `${IMG}/Noise.png`;

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open as in figma
  
  const faqs = [
    { 
      q: 'What is live kanvas?', 
      a: "potential partner, or just curious about what we do, don't hesitate to reach out. Have questions, feedback, or ideas? We are here to help. Whether you're a content creator, a" 
    },
    { 
      q: 'Drop us an email, and we\'ll get back to you within 24-48 hours.', 
      a: "Drop us an email, and we'll get back to you within 24-48 hours." 
    },
    { 
      q: 'Drop us an email, and we\'ll get back to you within 24-48 hours.', 
      a: "Drop us an email, and we'll get back to you within 24-48 hours." 
    },
    { 
      q: 'Drop us an email, and we\'ll get back to you within 24-48 hours.', 
      a: "Drop us an email, and we'll get back to you within 24-48 hours." 
    },
  ];

  return (
    <div className="bg-[#181818] min-h-screen relative overflow-hidden flex flex-col">
      {/* ── Background glow effects ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[1000px] h-[1000px] bg-red-700 blur-[220px] opacity-60 rounded-full"></div>
      </div>

      {/* Noise texture overlay */}
      <img
        className="absolute w-full h-full top-0 left-0 mix-blend-color-burn pointer-events-none z-0 object-cover opacity-30"
        alt=""
        src={noiseTexture}
      />

      <Header transparent />

      <main className="flex-1 relative z-10 pt-[120px] pb-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Title & Contact */}
            <div className="flex-1 lg:max-w-[450px]">
              <h1 className="font-[family-name:var(--font-lato)] font-extrabold text-white text-3xl md:text-4xl lg:text-[44px] leading-tight mb-8">
                Frequently Asked <br /> Questions
              </h1>
              
              <div className="mb-10">
                <p className="font-[family-name:var(--font-lato)] text-white text-lg md:text-xl mb-6">
                  Cant find what you are looking for?
                </p>
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#e2283f] text-white font-[family-name:var(--font-lato)] font-bold text-lg rounded-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:bg-[#c01f37] transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="flex-[1.5] lg:pt-8">
              <div className="w-full h-[1px] bg-white/20 mb-2" />
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/20">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                    className="w-full flex items-start gap-4 py-8 text-left group"
                  >
                    <span className={`mt-1 transition-transform duration-300 ${openIndex === i ? 'rotate-0' : '-rotate-90'}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className={`font-[family-name:var(--font-lato)] font-bold text-white text-xl md:text-2xl transition-colors ${openIndex === i ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === i ? 'max-h-[500px] mb-8' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-10">
                      <p className="font-[family-name:var(--font-lato)] text-white/80 text-lg md:text-xl leading-relaxed max-w-[600px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main> 
    </div>
  );
}
