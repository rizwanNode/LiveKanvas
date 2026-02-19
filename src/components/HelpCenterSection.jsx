import { storyblokEditable } from '@storyblok/react/rsc';

const defaultCategories = ['Account', 'Manage your Podcast', 'Content Set up'];
const defaultTopics = [
  { title: 'Getting Started', description: 'Learn how to set up your account and start creating content on Live Kanvas.' },
  { title: 'Streaming', description: 'Everything you need to know about live streaming on our platform.' },
  { title: 'Monetization', description: 'Discover how to earn revenue from your content and grow your income.' },
  { title: 'Community Guidelines', description: 'Understand our community standards and content policies.' },
];

const HelpCenterSection = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative section-spacing overflow-hidden"
    >
      <div className="glow-top-left" />
      <div className="container-lk relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {blok.title || 'Support'}
          </h1>
          <p className="text-lk-white-65 text-lg mb-8 leading-relaxed">
            {blok.description ||
              "Have questions, feedback, or ideas? We are here to help. Whether you're a content creator, a potential partner, or just curious about what we do, don't hesitate to reach out."}
          </p>

          {/* Search */}
          <div className="relative mb-16">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-4 bg-lk-gray-15 border border-lk-gray-25 rounded-xl text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors pr-12"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 text-lk-white-40"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              {blok.categories_title || 'Categories'}
            </h2>
            <div className="space-y-0">
              {(blok.categories || defaultCategories).map((cat, i) => {
                const name = typeof cat === 'string' ? cat : cat.name || cat.title;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-4 border-b border-lk-gray-15 cursor-pointer group"
                  >
                    <div className="w-1 h-6 bg-lk-red rounded-full" />
                    <span className="text-lg text-lk-white-65 group-hover:text-white transition-colors font-medium">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Topics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              {blok.topics_title || 'Topics'}
            </h2>
            <div className="space-y-6">
              {(blok.topics || defaultTopics).map((topic, i) => {
                const title = typeof topic === 'string' ? topic : topic.title || topic.name;
                const desc = typeof topic === 'object' ? topic.description : '';
                return (
                  <div key={i} className="group cursor-pointer">
                    <h3 className="text-xl font-bold text-lk-red mb-2 group-hover:text-lk-red-dark transition-colors">
                      {title}
                    </h3>
                    {desc && (
                      <p className="text-lk-white-65 leading-relaxed">
                        {desc}
                      </p>
                    )}
                    <div className="mt-4 border-b border-lk-gray-15" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterSection;
