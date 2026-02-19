'use client';

import { useState } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-lk-gray-25">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-semibold text-white pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-lk-white-48 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m19 9-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-lk-white-65 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = ({ blok }) => {
  const defaultFaqs = [
    {
      question: 'What is Live Kanvas?',
      answer:
        "Live Kanvas is a next-generation social streaming platform designed to be a home for high-quality, story-driven content. Whether you're a content creator, a potential partner, or just curious about what we do, don't hesitate to reach out.",
    },
    {
      question: 'How do I sign up?',
      answer:
        "Visit our Pre-Order page to sign up for early access. You'll receive updates and be among the first to experience the platform.",
    },
    {
      question: 'How does monetization work?',
      answer:
        'We offer competitive revenue sharing with multiple monetization streams including ad revenue, subscriptions, tips, and sponsored content partnerships.',
    },
    {
      question: 'What content can I upload?',
      answer:
        'Live Kanvas supports movies, short films, documentaries, podcasts, TV shows, live streams, and more. All content must meet our community guidelines for quality and appropriateness.',
    },
    {
      question: 'How do I get started as a creator?',
      answer:
        "Sign up on our platform, complete your profile, and start uploading your content. Our onboarding guide will walk you through setting up your channel and monetization.",
    },
  ];

  const faqs = blok.faqs?.length
    ? blok.faqs.map((f) => ({
        question: f.question,
        answer: f.answer,
      }))
    : defaultFaqs;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative section-spacing overflow-hidden"
    >
      <div className="glow-top-left" />
      <div className="container-lk relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Title & Contact CTA */}
          <div className="lg:w-[340px] flex-shrink-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-lk-white-65 mb-8">
              {blok.subtitle || "Can't find what you are looking for?"}
            </p>

            {blok.cta_text && (
              <Link
                href={blok.cta_link?.cached_url || blok.cta_link?.url || '/contact-us'}
                className="btn-primary inline-flex"
              >
                {blok.cta_text}
              </Link>
            )}
          </div>

          {/* Right side - FAQ items */}
          <div className="flex-1">
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>

        {/* Can't find what you need */}
        {blok.contact_text && (
          <div className="mt-16 text-center">
            <p className="text-lk-white-65 mb-4">{blok.contact_text}</p>
            <Link href="/contact-us" className="btn-outline">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
