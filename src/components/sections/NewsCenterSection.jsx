import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import Link from 'next/link';

const placeholderArticles = [
  { title: 'Live Kanvas Launches Creator Partnership Program', date: 'January 15, 2025', category: 'Platform News', color: 'from-lk-red/40 to-lk-dark' },
  { title: 'How Independent Filmmakers Are Finding New Audiences', date: 'January 10, 2025', category: 'Creator Stories', color: 'from-purple-900/40 to-lk-dark' },
  { title: 'The Future of Social Streaming: What to Expect in 2025', date: 'January 5, 2025', category: 'Industry', color: 'from-blue-900/40 to-lk-dark' },
  { title: 'New Monetization Features Coming to Live Kanvas', date: 'December 28, 2024', category: 'Product Updates', color: 'from-orange-900/40 to-lk-dark' },
  { title: 'Behind the Scenes: Building a Platform for Creators', date: 'December 20, 2024', category: 'Company', color: 'from-green-900/40 to-lk-dark' },
  { title: 'Top Documentary Creators to Watch This Year', date: 'December 15, 2024', category: 'Creator Spotlight', color: 'from-pink-900/40 to-lk-dark' },
];

const PlaceholderCard = ({ article, featured }) => (
  <div className={`group rounded-xl overflow-hidden border border-lk-gray-15 hover:border-lk-red/40 transition-all cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
    <div className={`${featured ? 'aspect-[2/1]' : 'aspect-video'} bg-gradient-to-b ${article.color} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-lk-dark/30" />
      <div className="absolute bottom-4 left-4">
        <span className="px-2 py-1 bg-lk-red/80 text-white text-xs font-semibold rounded">{article.category}</span>
      </div>
    </div>
    <div className="p-5">
      <p className="text-sm text-lk-white-40 mb-2">{article.date}</p>
      <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-bold text-white group-hover:text-lk-red transition-colors`}>
        {article.title}
      </h3>
    </div>
  </div>
);

const NewsCenterSection = ({ blok }) => {
  const hasArticles = blok.articles && blok.articles.length > 0;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative section-spacing overflow-hidden"
    >
      <div className="container-lk relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              {blok.title || 'News Center'}
            </h1>
            <p className="text-lk-white-65">
              {blok.subtitle || 'Latest News'}
            </p>
          </div>
          {/* Search */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red transition-colors w-[200px]"
            />
          </div>
        </div>

        {hasArticles ? (
          <>
            {/* CMS articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blok.articles.map((article) => (
                <StoryblokServerComponent blok={article} key={article._uid} />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Placeholder featured article */}
            <PlaceholderCard article={placeholderArticles[0]} featured />

            {/* Placeholder articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {placeholderArticles.slice(1, 5).map((article, i) => (
                <PlaceholderCard key={i} article={article} />
              ))}
            </div>
          </>
        )}

        {/* View All */}
        {blok.show_view_all && (
          <div className="text-center mt-12">
            <Link
              href={blok.view_all_link?.cached_url || blok.view_all_link?.url || '/news'}
              className="btn-outline"
            >
              View All
            </Link>
          </div>
        )}

        {/* Bottom section */}
        {blok.bottom_title && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">
              {blok.bottom_title}
            </h2>
            {blok.bottom_articles?.map((article) => (
              <StoryblokServerComponent blok={article} key={article._uid} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsCenterSection;
