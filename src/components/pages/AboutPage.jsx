'use client';

import Link from 'next/link';

export default function AboutPage() {
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
      <section className="relative pt-20 md:pt-32 overflow-hidden z-10">
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
