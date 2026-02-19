import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import Link from 'next/link';

const CreatorsSection = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative overflow-hidden"
    >
      {/* Hero section with red gradient */}
      <div className="relative red-gradient-section pt-32 pb-24">
        <div className="container-lk relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
            {blok.title || 'Upload Content, Engage Viewers, Get Paid.'}
          </h1>
          {blok.badge_text && (
            <Link href="/pre-order" className="btn-primary">
              {blok.badge_text}
            </Link>
          )}
        </div>
      </div>

      {/* Monetize section with phone mockup */}
      <div className="relative section-spacing">
        <div className="glow-top-right" />
        <div className="container-lk relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Phone mockup */}
            <div className="flex-1 flex justify-center">
              {blok.showcase_image?.filename ? (
                <img
                  src={blok.showcase_image.filename}
                  alt="Creator app"
                  className="w-[260px] md:w-[300px] rounded-[2rem] shadow-2xl shadow-black/50"
                />
              ) : (
                <div className="w-[260px] h-[520px] rounded-[2rem] bg-gradient-to-b from-lk-red/20 to-lk-dark border border-lk-gray-25" />
              )}
            </div>

            {/* Text content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {blok.monetize_title || 'Monetize Your Passion'}
              </h2>
              <p className="text-lk-white-65 text-lg leading-relaxed mb-8">
                {blok.monetize_description ||
                  'Live Kanvas is a next-generation social streaming platform designed to be a home for high-quality, story-driven content.'}
              </p>
              {blok.monetize_cta && (
                <Link href="/pre-order" className="btn-primary">
                  {blok.monetize_cta}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Why Create section with numbered reasons */}
      <div className="relative section-spacing">
        <div className="container-lk relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
            {blok.why_title || 'Why Create on Live Kanvas?'}
          </h2>

          {blok.reasons && blok.reasons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blok.reasons.map((reason) => (
                <StoryblokServerComponent blok={reason} key={reason._uid} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: '1', title: 'Global Distribution', desc: 'Reach audiences worldwide with our platform.' },
                { num: '2', title: 'Revenue Sharing', desc: 'Competitive monetization for your content.' },
                { num: '3', title: 'Content Ownership', desc: 'You own your content, always.' },
                { num: '4', title: 'Community Building', desc: 'Build and engage your audience directly.' },
                { num: '5', title: 'Analytics & Insights', desc: 'Detailed analytics to grow your channel.' },
              ].map((r) => (
                <div key={r.num} className="red-gradient-card p-8 flex flex-col items-start gap-4">
                  <span className="text-5xl font-bold text-lk-red/30">{r.num}</span>
                  <h3 className="text-xl font-bold text-white">{r.title}</h3>
                  <p className="text-lk-white-65">{r.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Join the Tribe CTA */}
      <div className="relative section-spacing">
        <div className="container-lk relative z-10">
          <div className="red-gradient-card p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {blok.tribe_title || 'Join Live Kanvas Today!'}
            </h2>
            <p className="text-lk-white-65 text-lg mb-8 max-w-2xl mx-auto">
              {blok.tribe_description || 'Start exploring, creating, and connecting!'}
            </p>
            {blok.tribe_cta && (
              <Link href="/pre-order" className="btn-primary text-lg px-8 py-4">
                {blok.tribe_cta}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
