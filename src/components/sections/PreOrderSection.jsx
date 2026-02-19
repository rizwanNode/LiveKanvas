import { storyblokEditable } from '@storyblok/react/rsc';

const PreOrderSection = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative overflow-hidden"
    >
      {/* Red gradient hero area */}
      <div className="red-gradient-section pt-32 pb-20">
        <div className="container-lk relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {blok.title || 'Be A Part Of Live Kanvas Today!'}
            </h1>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container-lk relative z-10 -mt-4 pb-20">
        <div className="max-w-xl mx-auto">
          {/* QR Code */}
          {blok.qr_code?.filename && (
            <div className="flex items-start gap-6 mb-12">
              <div className="bg-white p-3 rounded-xl flex-shrink-0">
                <img
                  src={blok.qr_code.filename}
                  alt="Download QR Code"
                  className="w-[140px] h-[140px] object-contain"
                />
              </div>
              <div className="pt-2">
                <p className="text-lk-white-65 text-sm flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lk-red">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {blok.qr_label || 'Download the App'}
                </p>
              </div>
            </div>
          )}

          {/* Email subscription */}
          <form className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors"
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-lk-white-65">
              <input type="checkbox" className="rounded border-lk-gray-25 mt-0.5" />
              <span>I agree to receive other communications from Live Kanvas.</span>
            </label>
            <button type="submit" className="btn-primary w-full py-4">
              Subscribe Now
            </button>
          </form>

          <p className="text-sm text-lk-white-40 text-center">
            <a href="/privacy" className="underline hover:text-white transition-colors">
              Privacy Statement
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
