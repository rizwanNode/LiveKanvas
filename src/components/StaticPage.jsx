'use client';

import Header from './layout/Header';
import Footer from './layout/Footer';
import KanvasPage from './KanvasPage';

// Import individual page components
import AboutPage from './pages/AboutPage';
import CreatorsPage from './pages/CreatorsPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import PreOrderPage from './pages/PreOrderPage';
import HelpCenterPage from './pages/HelpCenterPage';
import FaqPage from './pages/FaqPage';
import NewsCenterPage from './pages/NewsCenterPage';
import NotFoundPage from './pages/NotFoundPage';

/* ─── MAIN ROUTER ─── */
const pages = {
  home: KanvasPage,
  'about-us': AboutPage,
  creators: CreatorsPage,
  partners: PartnersPage,
  'contact-us': ContactPage,
  'pre-order': PreOrderPage,
  'help-center': HelpCenterPage,
  faq: FaqPage,
  'news-center': NewsCenterPage,
  blog: NewsCenterPage,
};

export default function StaticPage({ slug }) {
  const PageComponent = pages[slug] || NotFoundPage;

  return (
    <div className="relative min-h-screen">
      <Header transparent={true} />
      <main className="w-full">
        <PageComponent />
      </main>
      <div className="absolute bottom-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
