import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import StaticPage from '@/components/StaticPage';

async function fetchStory(fullSlug) {
  // Use direct fetch to avoid Storyblok SDK localStorage issues on server
  const token = process.env.STORYBLOK_DELIVERY_API_TOKEN;
  if (!token) return null;

  const region = process.env.STORYBLOK_REGION || 'eu';
  const baseUrl =
    process.env.STORYBLOK_API_BASE_URL ||
    (region === 'us'
      ? 'https://api-us.storyblok.com'
      : 'https://api.storyblok.com');

  try {
    const res = await fetch(
      `${baseUrl}/v2/cdn/stories/${fullSlug}?version=draft&token=${token}`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json?.story || null;
  } catch {
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  let fullSlug = slug ? slug.join('/') : 'home';

  // Initialize Storyblok components registry (needed for StoryblokStory rendering)
  getStoryblokApi();

  // Use static pages for routes where we have custom implementations
  const staticSlugs = ['home', 'about-us'];
  if (staticSlugs.includes(fullSlug)) {
    return <StaticPage slug={fullSlug} />;
  }

  const story = await fetchStory(fullSlug);

  if (story) {
    return <StoryblokStory story={story} />;
  }

  return <StaticPage slug={fullSlug} />;
}
