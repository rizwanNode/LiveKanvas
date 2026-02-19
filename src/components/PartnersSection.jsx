import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import Link from 'next/link';

const PartnersSection = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative section-spacing overflow-hidden"
    >
      <div className="glow-top-left" />
      <div className="container-lk relative z-10">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-lk-red font-semibold text-sm uppercase tracking-wider mb-3">
            {blok.label || 'Live Kanvas Brand Partners'}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {blok.title || 'Where Brands & Creators Connect Through Engaging Content'}
          </h1>
          {blok.cta_text && (
            <Link href="#contact" className="btn-primary">
              {blok.cta_text}
            </Link>
          )}
        </div>

        {/* About */}
        {blok.about_title && (
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{blok.about_title}</h3>
            <p className="text-lg text-lk-white-65 leading-relaxed">
              {blok.about_description}
            </p>
          </div>
        )}

        {/* Why Partner */}
        {blok.partner_reasons && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              {blok.partner_title || 'Why Partner With Us?'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blok.partner_reasons.map((reason) => (
                <StoryblokServerComponent blok={reason} key={reason._uid} />
              ))}
            </div>
          </div>
        )}

        {/* Monetization Tools */}
        {blok.tools_title && (
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Brand <span className="text-lk-red">monetization</span> tools
            </h2>
            {blok.tools_items && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {blok.tools_items.map((tool) => (
                  <StoryblokServerComponent blok={tool} key={tool._uid} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Power of Partnership */}
        {blok.partnership_title && (
          <div className="red-gradient-card p-10 md:p-16 mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lk-red font-semibold text-sm uppercase tracking-wider mb-2">
                  Brand Benefits
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {blok.partnership_title}
                </h2>
                <p className="text-lk-white-65 text-lg leading-relaxed">
                  {blok.partnership_description}
                </p>
              </div>
              <div className="flex-1 flex justify-center gap-4">
                {blok.partnership_mockups?.map((img, i) => (
                  <img
                    key={i}
                    src={img.filename}
                    alt="App"
                    className="w-[140px] md:w-[180px] rounded-[1.5rem] shadow-xl"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {blok.show_contact_form && (
          <div id="contact" className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
              Interested in partnering with Live Kanvas?
            </h2>
            <h3 className="text-2xl font-semibold text-lk-red text-center mb-10">
              Contact Us
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
              />
              <input
                type="text"
                placeholder="Industry Address"
                className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
              />
              <textarea
                placeholder="Inquiry"
                rows={4}
                className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors resize-none"
              />
              <button type="submit" className="btn-primary w-full py-4">
                Submit Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
