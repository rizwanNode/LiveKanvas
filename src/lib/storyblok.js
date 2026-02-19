import Page from '@/components/Page';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import CreatorsSection from '@/components/sections/CreatorsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactSection from '@/components/sections/ContactSection';
import PreOrderSection from '@/components/sections/PreOrderSection';
import HelpCenterSection from '@/components/sections/HelpCenterSection';
import FaqSection from '@/components/sections/FaqSection';
import NewsCenterSection from '@/components/sections/NewsCenterSection';
import NewsArticleCard from '@/components/sections/NewsArticleCard';
import Grid from '@/components/common/Grid';
import Teaser from '@/components/common/Teaser';
import Feature from '@/components/common/Feature';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

// Fix localStorage for server-side rendering (Storyblok SDK requires it)
// Node.js 22+ has a built-in localStorage but it may not work correctly
// when --localstorage-file is not provided with a valid path
if (typeof window === 'undefined') {
  const store = {};
  globalThis.localStorage = {
    getItem: (key) => store[key] ?? null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i] ?? null,
  };
}

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    header: Header,
    footer: Footer,
    about_section: AboutSection,
    creators_section: CreatorsSection,
    partners_section: PartnersSection,
    contact_section: ContactSection,
    pre_order_section: PreOrderSection,
    help_center_section: HelpCenterSection,
    faq_section: FaqSection,
    news_center_section: NewsCenterSection,
    news_article_card: NewsArticleCard,
    grid: Grid,
    teaser: Teaser,
    feature: Feature,
  },
  apiOptions: {
    region: process.env.STORYBLOK_REGION || 'eu',
    endpoint: process.env.STORYBLOK_API_BASE_URL
      ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
      : undefined,
  },
});
