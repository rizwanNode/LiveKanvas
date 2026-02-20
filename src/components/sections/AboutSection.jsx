import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const AboutSection = ({ blok }) => {
  
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative overflow-hidden"
    >
      {/* Hero with large quote */}
      <div className="relative section-spacing pt-32">
        <div className="glow-top-left" />
        <div className="glow-top-right" />
        <div className="container-lk relative z-10 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed max-w-4xl mx-auto mb-16">
            {blok.title ||
              'We are restoring the joy of content with community-driven experiences, top-tier quality, and creator recognition.'}
          </h1>
        </div>
      </div>

      {/* About Us section */}
      <div className="section-spacing">
        <div className="container-lk">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {blok.about_title || 'About Us'}
            </h2>
            <p className="text-lg text-lk-white-65 leading-relaxed">
              {blok.about_description ||
                'Live Kanvas is a revolutionary social streaming platform offering authentic, diverse entertainment from underrepresented global talent. By combining user-generated content with interactive live features, it redefines how users consume and co-create entertainment.'}
            </p>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="section-spacing">
        <div className="container-lk">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {blok.apart_title || 'What Sets Us Apart'}
            </h2>
            <p className="text-lg text-lk-white-65 leading-relaxed">
              {blok.apart_description ||
                'We are a creator-led platform dedicated to prioritizing the needs of hardworking creators. Live Kanvas is built on the belief that every creator deserves a space where their unique voice can thrive without compromise.'}
            </p>
          </div>
        </div>
      </div>

      {/* The World on Your Kanvas */}
      <div className="section-spacing">
        <div className="container-lk text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 leading-tight">
            {blok.large_text || 'The World on Your Kanvas.'}
          </h2>
        </div>
      </div>

      {/* Our Vision */}
      <div className="section-spacing">
        <div className="container-lk">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {blok.vision_title || 'Our Vision'}
            </h2>
            <p className="text-lg text-lk-white-65 leading-relaxed">
              {blok.vision_description ||
                "Our mission is to provide authentic representation, diverse stories, and entertainment from today's top undervalued talent around the globe. We prioritize community building by fostering a place with direct storytelling, authentic engagement, and creator-centric monetization. We are empowering creators with control over their revenue earnings through a competitive monetization model."}
            </p>
          </div>
        </div>
      </div>

      {/* Get Started CTA Card */}
      <div className="section-spacing">
        <div className="container-lk">
          <div className="red-gradient-card p-10 md:p-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {blok.cta_title || 'Get Started Today!'}
              </h2>
              <p className="text-lk-white-65 text-lg mb-8">
                {blok.cta_subtitle || 'A social streaming experience right at your fingertips.'}
              </p>
              <Link href="/pre-order" className="btn-primary text-lg px-8 py-4">
                Subscribe Now
              </Link>
            </div>
            <div className="flex-shrink-0">
              {blok.cta_image?.filename ? (
                <img
                  src={blok.cta_image.filename}
                  alt="LiveKanvas App"
                  className="w-[200px] md:w-[240px] rounded-[1.5rem] shadow-2xl shadow-black/50"
                />
              ) : (
                <div className="w-[200px] h-[400px] rounded-[1.5rem] bg-gradient-to-b from-lk-red/20 to-lk-dark border border-lk-gray-25" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
