'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: 'What is Live Kanvas?', a: "Live Kanvas is a next-generation social streaming platform designed to be a home for high-quality, story-driven content. Whether you're a content creator, a potential partner, or just curious about what we do, don't hesitate to reach out." },
    { q: 'How do I sign up?', a: "Drop us an email, and we'll get back to you within 24-48 hours." },
    { q: 'How does monetization work?', a: "Drop us an email, and we'll get back to you within 24-48 hours." },
    { q: 'What content can I upload?', a: "Drop us an email, and we'll get back to you within 24-48 hours." },
  ];
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-lk relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Frequently Asked Questions</h1>
        <p className="text-lk-white-65 mb-6">Can&apos;t find what you are looking for?</p>
        <Link href="/contact-us" className="btn-primary mb-10 inline-flex">Contact Us</Link>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-lk-gray-25">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                <span className="text-lg font-semibold text-white pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-lk-white-48 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <p className="text-lk-white-65 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
