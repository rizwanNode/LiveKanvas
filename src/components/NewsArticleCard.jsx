import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const NewsArticleCard = ({ blok }) => {
  return (
    <Link
      href={blok.link?.cached_url || '#'}
      {...storyblokEditable(blok)}
      className="group block rounded-xl overflow-hidden border border-lk-gray-15 hover:border-lk-red/40 transition-all"
    >
      {blok.image?.filename && (
        <div className="aspect-video overflow-hidden">
          <img
            src={blok.image.filename}
            alt={blok.title || 'News'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        {blok.date && (
          <p className="text-sm text-lk-white-40 mb-2">{blok.date}</p>
        )}
        <h3 className="text-lg font-bold text-white group-hover:text-lk-red transition-colors line-clamp-2">
          {blok.title}
        </h3>
        {blok.excerpt && (
          <p className="text-sm text-lk-white-65 mt-2 line-clamp-3">
            {blok.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
};

export default NewsArticleCard;
