import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const ContactSection = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative section-spacing overflow-hidden"
    >
      <div className="container-lk relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {blok.title || 'Contact Us'}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            {blok.subtitle || "We'd Love to Hear from You!"}
          </h2>
          <p className="text-lk-white-65 text-lg mb-4 leading-relaxed">
            {blok.description ||
              "Have questions, feedback, or ideas? We are here to help. Whether you're a content creator, a potential partner, or just curious about what we do, don't hesitate to reach out."}
          </p>
          <p className="text-lk-white-65 mb-10">
            {blok.email_note ||
              "Drop us an email, and we'll get back to you within 24-48 hours."}
          </p>

          {/* Contact Form */}
          <form className="space-y-4 mb-16">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
            />
            <textarea
              placeholder="Message.."
              rows={6}
              className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors resize-none"
            />
            <button type="submit" className="btn-primary w-full py-4">
              Submit
            </button>
          </form>

          {/* Follow Us */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
            <p className="text-lk-white-65 mb-4">
              Stay connected and updated through our social media channels.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-lk-gray-15 flex items-center justify-center text-white/70 hover:text-white hover:bg-lk-gray-25 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-lk-gray-15 flex items-center justify-center text-white/70 hover:text-white hover:bg-lk-gray-25 transition-all">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-lk-gray-15 flex items-center justify-center text-white/70 hover:text-white hover:bg-lk-gray-25 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Need Help Fast */}
          <div className="red-gradient-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {blok.help_title || 'Need Help Fast?'}
              </h3>
              <p className="text-lk-white-65 mb-6">
                {blok.help_description ||
                  'Check out our FAQs page for answers to common questions.'}
              </p>
              <Link href="/faq" className="btn-outline">
                Visit FAQs
              </Link>
            </div>
            {blok.help_image?.filename && (
              <div className="flex-shrink-0">
                <img
                  src={blok.help_image.filename}
                  alt="Help"
                  className="w-[200px] rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
