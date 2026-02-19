import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';

export const metadata = {
  title: 'Live Kanvas - Unite, Create, Inspire',
  description:
    'Experience the next evolution of content creation and live streaming. A social streaming platform for movies, short films, documentaries, podcasts and more.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="noise-overlay" />
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
