import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import Header from './Header';
import Footer from './Footer';

const Page = ({ blok }) => (
  <>
    <Header blok={blok.header?.[0]} />
    <main {...storyblokEditable(blok)} className="min-h-screen">
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
    <Footer blok={blok.footer?.[0]} />
  </>
);

export default Page;
