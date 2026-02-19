'use client';

import Header from './Header';
import Footer from './Footer';
import KanvasPage from './KanvasPage';
import Link from 'next/link';
import { useState } from 'react';

/* ─── ABOUT US PAGE ─── */
function AboutPage() {
  return (
    <>
      {/* ── Background glow effects ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[700px] h-[700px]"
          style={{
            top: '10%',
            left: '25%',
            background:
              'radial-gradient(circle, rgba(226,40,63,0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute w-[700px] h-[700px]"
          style={{
            top: '55%',
            left: '40%',
            background:
              'radial-gradient(circle, rgba(226,40,63,0.14) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative pt-[72px] overflow-hidden z-10">
        <div className="glow-top-left" />
        <div className="container-lk relative z-10 text-center pt-12 md:pt-20 pb-16 md:pb-24">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] lg:leading-[1.2] font-bold text-white max-w-[1070px] mx-auto">
            We&apos;re restoring the joy of content with community-driven
            experiences, top-tier quality, and creator recognition.
          </h1>
        </div>
      </section>

      {/* ── About Us Section ── */}
      <section className="relative z-10 py-10 md:py-16">
        <div className="container-lk max-w-[1140px] mx-auto">
          <h2 className="text-2xl md:text-[36px] font-normal text-white text-center mb-6">
            About Us
          </h2>
          <div className="bg-[rgba(217,217,217,0.27)] rounded-[30px] px-8 py-10 md:px-14 md:py-12">
            <p className="text-base md:text-lg lg:text-[32px] lg:leading-[1.5] text-white text-center font-normal">
              Live Kanvas is a revolutionary social streaming platform offering
              authentic, diverse entertainment from underrepresented global
              talent. By combining user-generated content with interactive
              features, it redefines how users consume and co-create
              entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart Section ── */}
      <section className="relative z-10 py-10 md:py-16">
        <div className="container-lk max-w-[1140px] mx-auto">
          <h2 className="text-2xl md:text-[36px] font-normal text-white text-center mb-6">
            What Sets Us Apart
          </h2>
          <div className="bg-[rgba(217,217,217,0.27)] rounded-[30px] px-8 py-10 md:px-14 md:py-12">
            <p className="text-base md:text-lg lg:text-[32px] lg:leading-[1.5] text-white text-center font-normal">
              We are a creator-led platform dedicated to prioritizing the needs
              of hardworking creators. We recognize the value of content
              ownership, access to diverse audiences, robust content management
              and analytics, community building, and income generation. Live
              Kanvas was built to &ldquo;Give creators back control of their
              content.&rdquo; With our user-friendly platform, Live Kanvas aims
              to become a driving force in discovering tomorrow&apos;s leading
              talent.
            </p>
          </div>
        </div>
      </section>

      {/* ── The World on Your Kanvas ── */}
      <section className="relative z-10 py-10 md:py-16">
        <div className="container-lk text-center">
          <h2
            className="text-5xl md:text-7xl lg:text-[110px] font-medium leading-none select-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
            }}
          >
            The World on Your Kanvas.
          </h2>
        </div>
      </section>

      {/* ── Our Vision Section ── */}
      <section className="relative z-10 py-10 md:py-16">
        <div className="container-lk max-w-[1140px] mx-auto">
          <h2 className="text-2xl md:text-[36px] font-normal text-white text-center mb-6">
            Our Vision
          </h2>
          <div className="bg-[rgba(217,217,217,0.27)] rounded-[30px] px-8 py-10 md:px-14 md:py-12">
            <p className="text-base md:text-lg lg:text-[32px] lg:leading-[1.5] text-white text-center font-normal">
              Our mission is to provide authentic representation, diverse
              stories, and entertainment from today&apos;s top undervalued
              talent around the globe. We prioritize community building by
              fostering unique and diverse storytelling, promoting interactivity
              through live streaming and social features like likes and
              comments, and empowering creators with control over their revenue
              earnings through a competitive monetization model.
            </p>
          </div>
        </div>
      </section>

      {/* ── Get Started Today Section ── */}
      <section className="relative z-10 py-12 md:py-20">
        <div className="container-lk">
          <div className="bg-[rgba(226,40,63,0.32)] rounded-[30px] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] lg:leading-[1.15] text-white mb-4">
                <span className="font-normal">Get Started </span>
                <span className="font-bold">Today!</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-[32px] lg:leading-[1.4] text-white font-bold mb-8">
                A social streaming experience right at your fingertips.
              </p>
              <Link
                href="/pre-order"
                className="btn-primary text-lg md:text-xl px-10 py-4 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-semibold"
              >
                Download the App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Email Signup Section ── */}
      <section className="relative z-10 py-12 md:py-20">
        <div className="container-lk max-w-[1140px] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[1.2] font-bold text-white mb-4">
            Start exploring, creating, and connecting!
          </h2>
          <p className="text-base md:text-lg lg:text-[24px] lg:leading-[1.5] text-white mb-8 max-w-[680px]">
            Experience the next evolution of content creation and live
            streaming.
          </p>
          <p className="text-sm md:text-base lg:text-[24px] text-white font-medium mb-4">
            Sign up now for special updates!
          </p>
          <div className="max-w-[560px] mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 bg-lk-gray-40 rounded-[25px] text-white placeholder:text-lk-white-40 focus:outline-none focus:ring-2 focus:ring-lk-red transition-colors text-base md:text-[24px]"
            />
          </div>
          <label className="flex items-center gap-3 text-sm md:text-base text-white mb-6 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-2 border-white bg-transparent flex-shrink-0"
            />
            I agree to receive other communications from Live Kanvas.
          </label>
          <button className="btn-primary px-8 py-4 text-base md:text-[24px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-semibold">
            Subscribe Now
          </button>
        </div>
      </section>
    </>
  );
}

/* ─── CREATORS PAGE ─── */
function CreatorsPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center pt-[72px] overflow-hidden">
        <div className="glow-top-left" />
        <div className="glow-top-right" />
        <div className="container-lk relative z-10">
          <div className="max-w-3xl">
            <Link href="/pre-order" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-lk-red text-white text-sm font-semibold mb-8 hover:bg-lk-red-dark transition-colors">
              Join the Live Kanvas Tribe
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Upload Content, Engage Viewers, Get Paid.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Monetize Your Passion
          </h2>
          <p className="text-lg text-lk-white-65 max-w-4xl mx-auto mb-10 leading-relaxed">
            Live Kanvas is a next-generation social streaming platform designed to be a home for high-quality, story-driven content, including movies, short films, documentaries, podcasts, TV shows and more. We are bridging the gap between talent and global content distribution, empowering creators to turn their passion into careers.
          </p>
          <Link href="/pre-order" className="btn-primary">
            Join the Live Kanvas Tribe
          </Link>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            Why Create on Live Kanvas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '1', title: 'Global Distribution', desc: 'Reach audiences worldwide with our platform.' },
              { num: '2', title: 'Revenue Sharing', desc: 'Competitive monetization for your content.' },
              { num: '3', title: 'Content Ownership', desc: 'You own your content, always.' },
              { num: '4', title: 'Community Building', desc: 'Build and engage your audience directly.' },
              { num: '5', title: 'Analytics & Insights', desc: 'Detailed analytics to grow your channel.' },
            ].map((item) => (
              <div key={item.num} className="red-gradient-card p-8 flex items-start gap-4">
                <span className="text-5xl font-bold text-lk-red/30">{item.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-lk-white-65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <div className="red-gradient-card p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Join Live Kanvas Today!
            </h2>
            <p className="text-lg text-lk-white-65 max-w-2xl mx-auto mb-8">
              Start exploring, creating, and connecting!
            </p>
            <Link href="/pre-order" className="btn-primary">
              Join the Live Kanvas Tribe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── PARTNERS PAGE ─── */
function PartnersPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center pt-[72px] overflow-hidden">
        <div className="glow-top-left" />
        <div className="container-lk relative z-10 text-center">
          <p className="text-lk-red font-semibold text-sm uppercase tracking-wider mb-3">
            Live Kanvas Brand Partners
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Where Brands &amp; Creators Connect Through Engaging Content
          </h1>
          <Link href="#contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">About Live Kanvas</h2>
          <p className="text-lg text-lk-white-65 leading-relaxed">
            Live Kanvas is redefining entertainment by empowering creators to share movies, podcasts, documentaries, short films, and more — all while offering brands unique opportunities to connect with highly engaged audiences.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            Brand <span className="text-lk-red">monetization</span> tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {['Access a Unique Engaged Audience', 'Innovative Advertising & Sponsorship Formats', 'Amplify Your Brand'].map((title) => (
              <div key={title} className="red-gradient-card p-8 text-center">
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-lk-white-65 text-sm">Leverage our platform for maximum brand impact.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <div className="red-gradient-card p-10 md:p-16 text-center">
            <p className="text-lk-red font-semibold text-sm uppercase mb-2">Brand Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock the power of partnership
            </h2>
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="container-lk max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Interested in partnering with Live Kanvas?</h2>
          <h3 className="text-2xl font-semibold text-lk-red mb-10">Contact Us</h3>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
              <input type="text" placeholder="Last name" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <input type="text" placeholder="Company" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <textarea placeholder="Inquiry" rows={4} className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red resize-none" />
            <button type="submit" className="btn-primary w-full py-4">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </>
  );
}

/* ─── CONTACT US PAGE ─── */
function ContactPage() {
  return (
    <>
      <section className="relative section-spacing pt-32 overflow-hidden">
        <div className="container-lk relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">We&apos;d Love to Hear from You!</h2>
          <p className="text-lk-white-65 text-lg mb-4 leading-relaxed">
            Have questions, feedback, or ideas? We are here to help. Whether you&apos;re a content creator, a potential partner, or just curious about what we do, don&apos;t hesitate to reach out.
          </p>
          <p className="text-lk-white-65 mb-10">
            Drop us an email, and we&apos;ll get back to you within 24-48 hours.
          </p>

          <form className="space-y-4 mb-16">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <textarea placeholder="Message.." rows={6} className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red resize-none" />
            <button type="submit" className="btn-primary w-full py-4">Submit</button>
          </form>

          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
            <p className="text-lk-white-65 mb-4">Stay connected and updated through our social media channels.</p>
            <div className="flex items-center justify-center gap-4">
              {['Instagram', 'X', 'Facebook'].map((name) => (
                <a key={name} href="#" className="w-10 h-10 rounded-full bg-lk-gray-15 flex items-center justify-center text-white/70 hover:text-white hover:bg-lk-gray-25 transition-all text-xs font-bold">
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="red-gradient-card p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Help Fast?</h3>
            <p className="text-lk-white-65 mb-6">Check out our FAQs page for answers to common questions.</p>
            <Link href="/faq" className="btn-outline">Visit FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── PRE-ORDER PAGE ─── */
function PreOrderPage() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="glow-top-left" />
      <div className="glow-top-right" />
      <div className="container-lk relative z-10 max-w-2xl mx-auto text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Be A Part Of Live Kanvas Today!
        </h1>
        <div className="flex items-start gap-4 justify-center mb-8">
          <div className="w-[120px] h-[120px] bg-white rounded-xl flex items-center justify-center">
            <span className="text-lk-dark text-xs font-bold">QR Code</span>
          </div>
          <p className="text-lk-white-65 text-sm text-left">Download the App</p>
        </div>
        <form className="space-y-4 mb-8">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
          <label className="flex items-center gap-2 text-sm text-lk-white-65">
            <input type="checkbox" className="rounded border-lk-gray-25" />
            I agree to receive other communications from Live Kanvas.
          </label>
          <button type="submit" className="btn-primary w-full py-4">Subscribe Now</button>
        </form>
        <p className="text-sm text-lk-white-40">
          <a href="/privacy" className="underline hover:text-white">Privacy Statement</a>
        </p>
      </div>
    </section>
  );
}

/* ─── HELP CENTER PAGE ─── */
function HelpCenterPage() {
  return (
    <section className="relative section-spacing pt-32 overflow-hidden">
      <div className="container-lk relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support</h1>
        <p className="text-lk-white-65 text-lg mb-8 leading-relaxed">
          Have questions, feedback, or ideas? We are here to help. Whether you&apos;re a content creator, a potential partner, or just curious about what we do, don&apos;t hesitate to reach out.
        </p>
        <div className="relative mb-12">
          <input type="text" placeholder="Search" className="w-full px-5 py-4 bg-lk-gray-15 border border-lk-gray-25 rounded-xl text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red pr-12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
            {['Account', 'Manage your Podcast', 'Content Set up'].map((item) => (
              <div key={item} className="p-4 border-b border-lk-gray-15 text-lk-white-65 hover:text-white transition-colors cursor-pointer">
                {item}
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Topics</h2>
            {['Getting Started', 'Live Streaming', 'Monetization', 'Account Settings'].map((item) => (
              <div key={item} className="p-4 border-b border-lk-gray-15 text-lk-white-65 hover:text-white transition-colors cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">News</h2>
          <div className="p-4 border-b border-lk-gray-15 text-lk-white-48 text-sm">
            January 27, 2025
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ PAGE ─── */
function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: 'What is Live Kanvas?', a: "Live Kanvas is a next-generation social streaming platform designed to be a home for high-quality, story-driven content. Whether you're a content creator, a potential partner, or just curious about what we do, don't hesitate to reach out." },
    { q: 'How do I sign up?', a: "Drop us an email, and we'll get back to you within 24-48 hours." },
    { q: 'How does monetization work?', a: "Drop us an email, and we'll get back to you within 24-48 hours." },
    { q: 'What content can I upload?', a: "Drop us an email, and we'll get back to you within 24-48 hours." },
  ];
  return (
    <section className="relative section-spacing pt-32 overflow-hidden">
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

/* ─── NEWS CENTER PAGE ─── */
function NewsCenterPage() {
  return (
    <section className="relative section-spacing pt-32 overflow-hidden">
      <div className="container-lk relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">News Center</h1>
            <p className="text-lk-white-65">Latest News</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-lk-gray-15 hover:border-lk-red/40 transition-all cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-lk-red/20 to-lk-dark" />
              <div className="p-5">
                <p className="text-sm text-lk-white-40 mb-2">February {i * 3}, 2025</p>
                <h3 className="text-lg font-bold text-white">News Article Title {i}</h3>
                <p className="text-sm text-lk-white-65 mt-2">Latest updates and news from Live Kanvas.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 404 ─── */
function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-[72px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-lk-red mb-4">404</h1>
        <p className="text-xl text-lk-white-65 mb-8">Page not found</p>
        <Link href="/" className="btn-primary">Go Home</Link>
      </div>
    </section>
  );
}

/* ─── MAIN ROUTER ─── */
const pages = {
  home: KanvasPage,
  'about-us': AboutPage,
  creators: CreatorsPage,
  partners: PartnersPage,
  'contact-us': ContactPage,
  'pre-order': PreOrderPage,
  'help-center': HelpCenterPage,
  faq: FaqPage,
  'news-center': NewsCenterPage,
  blog: NewsCenterPage,
};

const fullPageLayouts = new Set(['home']);

export default function StaticPage({ slug }) {
  const PageComponent = pages[slug] || NotFoundPage;

  if (fullPageLayouts.has(slug)) {
    return <PageComponent />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageComponent />
      </main>
      <Footer />
    </>
  );
}
