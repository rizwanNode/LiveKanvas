import Page from '@/components/Page';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import CreatorsSection from '@/components/CreatorsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import PreOrderSection from '@/components/PreOrderSection';
import HelpCenterSection from '@/components/HelpCenterSection';
import FaqSection from '@/components/FaqSection';
import NewsCenterSection from '@/components/NewsCenterSection';
import NewsArticleCard from '@/components/NewsArticleCard';
import Grid from '@/components/Grid';
import Teaser from '@/components/Teaser';
import Feature from '@/components/Feature';
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
