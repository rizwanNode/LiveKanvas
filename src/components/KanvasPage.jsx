'use client';

import { useState } from 'react';
import Header from './Header';

/* ─────────────────────────────────────────────
   KANVAS PAGE — Responsive
   Matches Figma node 7:5 at desktop, adapts to
   tablet and mobile. Assets in public/images/kanvas/
   ───────────────────────────────────────────── */
const IMG = '/images/kanvas';

const logo7 = `${IMG}/2025_Live%20Kanvas%20Cir%20SQ-06%207.png`;
const logo9 = `${IMG}/2025_Live%20Kanvas%20Cir%20SQ-06%209.png`;
const logo12 = `${IMG}/2025_Live%20Kanvas%20Cir%20SQ-06%2012.png`;
const badgesAppStore = `${IMG}/Badges.svg`;
const badgesGooglePlay = `${IMG}/Badges-1.svg`;
const menuIcon = `${IMG}/Menu.png`;
const noiseTexture = `${IMG}/Noise.png`;
const decorativeVector = `${IMG}/Vector.svg`;
const globeMap = `${IMG}/map.svg`;
const globeMapStrip = `${IMG}/map-strip.svg`;
const worldMap = `${IMG}/world-map.svg`;
const earthMap = `${IMG}/earth-map.jpg`;

const floatingShadow = `${IMG}/iPhone%2012%20mockup%20(Floating%20Shadow)%20(Mockuuups%20Studio).png`;
const floatingShadow1 = `${IMG}/iPhone%2012%20mockup%20(Floating%20Shadow)%20(Mockuuups%20Studio)-1.png`;
const floatingShadow2 = `${IMG}/iPhone%2012%20mockup%20(Floating%20Shadow)%20(Mockuuups%20Studio)-2.png`;
const shortShadow = `${IMG}/iPhone%2012%20mockup%20(Short%20Shadow)%20(Mockuuups%20Studio).png`;
const shortShadow1 = `${IMG}/iPhone%2012%20mockup%20(Short%20Shadow)%20(Mockuuups%20Studio)-1.png`;
const shortShadow2 = `${IMG}/iPhone%2012%20mockup%20(Short%20Shadow)%20(Mockuuups%20Studio)-2.png`;
const shortShadow3 = `${IMG}/iPhone%2012%20mockup%20(Short%20Shadow)%20(Mockuuups%20Studio)-3.png`;
const heroPerspectivePhone = `${IMG}/iPhone%2012%20Mockup%20Perspective%20Right.png`;
const heroStraightPhone = `${IMG}/iPhone%2012%20mockup%20Hero.png`;

const facebookIcon = `${IMG}/Facebook.png`;
const xIcon = `${IMG}/X.png`;
const instagramIcon = `${IMG}/Instagram.png`;
const linkedinIcon = `${IMG}/LinkedIn.png`;

const flagUnitedStates = `${IMG}/united%20states.svg`;
const flagFrance = `${IMG}/france.svg`;
const flagJapan = `${IMG}/japan.svg`;
const flagNigeria = `${IMG}/nigeria.svg`;
const flagIndia = `${IMG}/india.svg`;
const flagNorway = `${IMG}/norway.svg`;
const flagSpain = `${IMG}/spain.svg`;
const flagSouthKorea = `${IMG}/south%20korea.svg`;
const flagTaiwan = `${IMG}/taiwan.svg`;
const flagUAE = `${IMG}/united%20arab%20emirates.svg`;
const flagGermany = `${IMG}/germany.svg`;

/* Globe + flags wrapper: 1440×750. Flags positioned to orbit the
   bigger globe, matching Figma visual arrangement. */
const globeFlags = [
  { id: 1,  icon: flagUnitedStates, name: 'US',          top: 2,     left: 10    },
  { id: 2,  icon: flagFrance,       name: 'France',      top: 38,    left: 12    },
  { id: 3,  icon: flagJapan,        name: 'Japan',       top: 82,    left: 70    },
  { id: 4,  icon: flagNigeria,      name: 'Nigeria',     top: 2,     left: 80    },
  { id: 5,  icon: flagIndia,        name: 'India',       top: 42,    left: 80    },
  { id: 6,  icon: flagNorway,       name: 'Norway',      top: 80,    left: 13    },
  { id: 7,  icon: flagSpain,        name: 'Spain',       top: 22,    left: 1     },
  { id: 8,  icon: flagSouthKorea,   name: 'South Korea', top: 58,    left: 3     },
  { id: 9,  icon: flagTaiwan,       name: 'Taiwan',      top: 62,    left: 85    },
  { id: 10, icon: flagUAE,          name: 'UAE',         top: 22,    left: 89    },
  { id: 11, icon: flagGermany,      name: 'Germany',     top: 84,    left: 28    },
];

const creatorFeatures = [
  { id: 1, title: 'Profile Dashboard', desc: 'Take control of your creative journey. Manage your content, track growth, analyze performance, and interact with fans—all in one place.', image: `${IMG}/iPhone%2012%20mockup%20Profile%20Dashboard.png`, reverse: true, textPt: 150, descSemibold: false },
  { id: 2, title: 'Monetization Opportunities', desc: 'Turn your passion into income with options like Live Bucks, donations, and content-based earnings.', image: `${IMG}/iPhone%2012%20mockup%20Monetization.png`, reverse: false, textPt: 30, descSemibold: true },
  { id: 3, title: 'Live Streaming Made Easy', desc: 'Go live, engage with your audience, and build meaningful, real-time connections.', image: shortShadow, reverse: true, textPt: 110, descSemibold: false },
];

const viewerFeatures = [
  { id: 1, title: 'Exclusive Content', desc: 'Be part of the action! Chat, comment, and co-create with your favorite creators while connecting with fellow fans who share your passions.', image: shortShadow1, reverse: true },
  { id: 2, title: 'Never Miss A Stream', desc: 'Stay in the know. Get instant notifications about live events and performances from your favorite creators, so you never miss a moment.', image: shortShadow3, reverse: false },
  { id: 3, title: 'Short & Snappy Klipz', desc: 'Discover engaging short trailers tailored to captivate and entertain, making it easy to find your next favorite creator or content.', image: floatingShadow1, reverse: true },
];

function FeatureRow({ title, desc, image, reverse, textPt = 120, descSemibold = false }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start gap-6 md:gap-10 lg:gap-16`}>
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className={`w-[200px] md:w-[280px] lg:w-[380px] drop-shadow-2xl ${reverse ? 'rotate-[15deg]' : '-rotate-[14deg]'}`}
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <div className="hidden lg:block" style={{ height: `${textPt}px` }} />
        <h3 className="font-[family-name:var(--font-lato)] font-bold text-white text-xl md:text-2xl lg:text-[32px] lg:leading-[1.3] mb-2 md:mb-3">
          {title}
        </h3>
        <p className={`font-[family-name:var(--font-lato)] ${descSemibold ? 'font-semibold' : 'font-normal'} text-white text-sm md:text-lg lg:text-[28px] lg:leading-[1.5]`}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function KanvasPage() {
  const [email, setEmail] = useState('');
  const [agreeToComms, setAgreeToComms] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreeToComms) {
      console.log('Subscribing email:', email);
    }
  };

  return (
    <div className="bg-[#181818] overflow-hidden w-full relative">
      {/* ── Background glow effects — restored from original Figma ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Black elliptical glow — lower half of page */}
        <div
          className="absolute blur-[254.5px]"
          style={{
            width: '52.03%',
            height: '89.91%',
            top: '55.09%',
            left: '5.10%',
            background: '#000000',
            borderRadius: '374.62px / 5277.56px',
          }}
        />
        {/* Red elliptical glow — upper-center of page */}
        <div
          className="absolute blur-[254.5px]"
          style={{
            width: '44.22%',
            height: '76.39%',
            top: '11.76%',
            left: '27.92%',
            background: 'rgba(208, 0, 3, 0.85)',
            borderRadius: '318.38px / 4484.03px',
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <img
        className="absolute w-full h-full top-0 left-0 mix-blend-color-burn pointer-events-none z-0 object-cover"
        alt=""
        src={noiseTexture}
      />

      <Header transparent />

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section className="relative z-10 pt-8 md:pt-16 lg:pt-[106px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <h1
            className="font-[family-name:var(--font-lato)] font-extrabold text-white text-2xl sm:text-3xl md:text-5xl lg:text-[64px] lg:leading-[1.15] text-center mb-6 md:mb-12 lg:mb-[66px]"
            style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
          >
            Live Kanvas <br />Unite. Create. Inspire
          </h1>

          <p className="font-[family-name:var(--font-lato)] text-white text-sm sm:text-base md:text-2xl lg:text-4xl text-center max-w-[1248px] mx-auto mb-8 md:mb-14 lg:mb-[66px] leading-relaxed lg:leading-[1.4]">
            <span className="font-medium">Live Kanvas is where fans and creators unite, storytellers bring high-quality content to life, and inspiration thrives through meaningful social interactions. </span>
            <span className="font-bold">Experience it all!</span>
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-12 lg:mb-[66px]">
            <img className="h-[36px] md:h-[50px] lg:h-[72px] w-auto" alt="Google Play" src={badgesGooglePlay} />
            <img className="h-[36px] md:h-[50px] lg:h-[72px] w-auto" alt="App Store" src={badgesAppStore} />
          </div>

          <div className="flex justify-center mb-8 md:mb-14 lg:mb-[66px]">
            <img
              className="w-5 md:w-7 lg:w-[35px] h-auto animate-bounce-glow"
              alt=""
              src={decorativeVector}
            />
          </div>
        </div>

        {/* Hero phones + description */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-0">
          {/* Desktop — absolute positions from Figma (1440×897 section) */}
          <div className="hidden lg:block relative" style={{ aspectRatio: '1440 / 897' }}>
            <div className="absolute" style={{ left: '5%', top: '15%', width: '34.65%' }}>
              <p className="font-[family-name:var(--font-lato)] font-normal text-[28px] leading-[1.5] text-white">
                We&apos;re bringing back the joy of content with community-driven experiences, unmatched quality, and recognition for creators. Whether you&apos;re here to discover captivating entertainment or share your creative vision, Live Kanvas makes it all possible.
              </p>
            </div>
            <div className="absolute" style={{ left: '63.75%', top: '0%', width: '31.53%' }}>
              <img src={heroStraightPhone} alt="Live Kanvas App" className="w-full drop-shadow-2xl" />
            </div>
            <div className="absolute z-10" style={{ left: '33.47%', top: '5.9%', width: '36%' }}>
              <img src={heroPerspectivePhone} alt="Live Kanvas Podcast" className="w-full drop-shadow-2xl" />
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="lg:hidden flex flex-col items-center gap-6 md:gap-8 mb-6">
            <div className="text-center max-w-md px-2">
              <p className="font-[family-name:var(--font-lato)] font-normal text-sm md:text-lg text-white leading-relaxed">
                We&apos;re bringing back the joy of content with community-driven experiences, unmatched quality, and recognition for creators. Whether you&apos;re here to discover captivating entertainment or share your creative vision, Live Kanvas makes it all possible.
              </p>
            </div>
            <div className="relative w-full max-w-[420px] mx-auto" style={{ height: '320px' }}>
              <img src={heroStraightPhone} alt="Live Kanvas App" className="absolute right-0 top-0 w-[52%] drop-shadow-2xl" />
              <img src={heroPerspectivePhone} alt="Live Kanvas Podcast" className="absolute left-0 top-[5%] w-[58%] drop-shadow-2xl z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          LANGUAGES / GLOBE
          ════════════════════════════════════════ */}
      <section className="relative z-10 py-10 md:py-16 lg:pt-[13px] lg:pb-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 text-center">
          <h2 className="font-[family-name:var(--font-lato)] font-bold text-white text-xl md:text-3xl lg:text-[48px] lg:leading-[1.2] mb-1 md:mb-2 lg:mb-[13px]">
            Available in 11 Different Languages
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-white text-xl md:text-3xl lg:text-[48px] lg:leading-[1.2] mb-10 md:mb-16 lg:mb-[51px]">
            <span className="font-normal">Connect </span>
            <span className="font-extrabold">Globally</span>
          </p>

          {/* Globe + flags wrapper — 1440×750, taller for bigger globe */}
          <div className="relative mx-auto w-full mb-10" style={{ aspectRatio: '1440 / 750' }}>
            {/* Globe — ~15% bigger than Figma original */}
            <div
              className="absolute"
              style={{ left: '28%', top: '3%', width: '44%', aspectRatio: '548 / 508' }}
            >
              {/* Globe circle frame — red gradient, rounded, overflow hidden */}
              {/* Box-shadow creates the red glow OUTSIDE the circle only */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(225deg, rgba(247,83,83,1) 0%, rgba(178,0,0,1) 77%)',
                  boxShadow: 'inset 0px 0px 112px 20px #cc0000, 0px 0px 10px 8px rgba(255,80,80,0.9), 0px 0px 30px 10px rgba(255,30,30,0.75), 0px 0px 55px 12px rgba(255,0,0,0.6), 0px 0px 110px 0px rgba(255,0,0,0.5)',
                }}
              >
                {/* Full Figma map — background tiling for seamless loop */}
                <div
                  className="absolute inset-0 opacity-75 animate-globe-spin"
                  style={{
                    width: '912%',
                    backgroundImage: `url(${IMG}/globe-map.svg)`,
                    backgroundSize: '50% 100%',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: '0 0',
                  }}
                />
                {/* White highlight overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)' }} />
              </div>
            </div>
            {/* Flags — ~15% bigger: 107px = 7.43% of 1440, 100px = 13.33% of 750 */}
            {globeFlags.map((f) => (
              <div
                key={f.id}
                className="absolute overflow-hidden rounded-full z-10"
                style={{ top: `${f.top}%`, left: `${f.left}%`, width: '7.43%', height: '13.33%' }}
                title={f.name}
              >
                <img src={f.icon} alt={f.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CREATOR FEATURES
          ════════════════════════════════════════ */}
      <section className="relative z-10 py-10 md:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center mb-8 md:mb-14">
            <p className="font-[family-name:var(--font-lato)] font-semibold text-white text-lg md:text-2xl lg:text-[48px] lg:leading-[1.2] mb-1 md:mb-2 lg:mb-[29px]">Creator Features</p>
            <h2 className="font-[family-name:var(--font-lato)] text-white text-xl md:text-3xl lg:text-[64px] lg:leading-[1.1] mb-5 md:mb-8 lg:mb-[75px] lg:max-w-[751px] mx-auto" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
              <span className="font-bold">Authentic Stories</span><span className="font-normal">, Real People</span>
            </h2>
            <button
              onClick={() => window.open('#download', '_self')}
              className="inline-flex items-center justify-center px-6 md:px-10 lg:px-[72px] py-2.5 md:py-4 lg:py-[30px] bg-[#e2283f] text-white font-[family-name:var(--font-lato)] font-semibold text-base md:text-2xl lg:text-4xl rounded-[20px] shadow-[0px_4px_4px_#00000040] hover:bg-[#c01f37] transition-colors"
            >
              Download the App
            </button>
          </div>
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
            {creatorFeatures.map((f) => <FeatureRow key={f.id} {...f} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CREATOR TRIBE CTA
          ════════════════════════════════════════ */}
      <section className="relative z-10 py-14 md:py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 text-center">
          <h2 className="font-[family-name:var(--font-lato)] text-white text-xl md:text-3xl lg:text-[64px] lg:leading-[1.15] max-w-[900px] mx-auto mb-5 md:mb-8">
            <span className="font-medium">Be the first to join our global </span>
            <span className="font-extrabold">Creator Tribe</span>
          </h2>
          <button
            onClick={() => window.open('#join', '_self')}
            className="inline-flex items-center justify-center px-6 md:px-10 py-2.5 md:py-4 bg-[#e2283f] text-white font-[family-name:var(--font-lato)] font-bold text-base md:text-xl lg:text-[32px] rounded-[20px] shadow-[0px_4px_4px_#00000040] hover:bg-[#c01f37] transition-colors"
          >
            Join the Live Kanvas Tribe.
          </button>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VIEWER FEATURES
          ════════════════════════════════════════ */}
      <section className="relative z-10 py-10 md:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-center mb-8 md:mb-14">
            <p className="font-[family-name:var(--font-lato)] font-semibold text-white text-lg md:text-2xl lg:text-[48px] lg:leading-[1.2] mb-1 md:mb-2">Key Viewer Features</p>
            <h2 className="font-[family-name:var(--font-lato)] text-white text-xl md:text-3xl lg:text-[64px] lg:leading-[1.1]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
              <span className="font-medium">Watch What </span><span className="font-extrabold">Moves You</span>
            </h2>
          </div>
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
            {viewerFeatures.map((f) => <FeatureRow key={f.id} {...f} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA / EMAIL SIGNUP + DOWNLOAD
          ════════════════════════════════════════ */}
      <section className="relative z-10 py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="flex-1">
              <h2 className="font-[family-name:var(--font-lato)] font-bold text-white text-lg md:text-2xl lg:text-[40px] lg:leading-[1.2] mb-2 md:mb-4">
                Start exploring, creating, and connecting!
              </h2>
              <p className="font-[family-name:var(--font-lato)] font-normal text-white text-sm md:text-base lg:text-2xl mb-4 md:mb-6">
                Experience the next evolution of content creation and live streaming.
              </p>
              <p className="font-[family-name:var(--font-lato)] font-medium text-white text-sm md:text-base lg:text-2xl mb-3 md:mb-4">
                Sign up now for special updates!
              </p>
              <form onSubmit={handleSubscribe} className="max-w-[560px]">
                <div className="bg-[#d9d9d966] rounded-[25px] p-3 md:p-4 mb-3 md:mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent font-[family-name:var(--font-lato)] text-white text-sm md:text-lg lg:text-2xl px-3 md:px-4 py-2 focus:outline-none placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="flex items-start gap-2 mb-4 md:mb-6">
                  <input
                    type="checkbox"
                    id="kanvas-agree-comms"
                    checked={agreeToComms}
                    onChange={(e) => setAgreeToComms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-[5px] border-2 border-white flex-shrink-0"
                    required
                  />
                  <label htmlFor="kanvas-agree-comms" className="font-[family-name:var(--font-lato)] text-white text-xs md:text-sm lg:text-base">
                    I agree to receive other communications from Live Kanvas.
                  </label>
                </div>
                <button type="submit" className="bg-[#e2283f] rounded-[20px] shadow-[0px_4px_4px_#00000040] px-6 md:px-8 py-2.5 md:py-3 hover:bg-[#c01f37] transition-colors">
                  <span className="font-[family-name:var(--font-lato)] font-bold text-white text-sm md:text-lg lg:text-2xl">Subscribe Now</span>
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="font-[family-name:var(--font-lato)] text-white text-lg md:text-2xl lg:text-[40px] lg:leading-[1.2] mb-3 md:mb-6">
                <span className="font-semibold">Download the App </span><span className="font-bold">Now!</span>
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img className="h-[36px] md:h-[50px] lg:h-[72px] w-auto" alt="Google Play" src={badgesGooglePlay} />
                <img className="h-[36px] md:h-[50px] lg:h-[72px] w-auto" alt="App Store" src={badgesAppStore} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <footer className="relative z-10 pt-6 pb-8 md:pb-12">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="w-full h-[1px] bg-white/25 mb-6 md:mb-10" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0">
            <div className="flex-shrink-0 lg:mr-10">
              <img className="w-[50px] md:w-[70px] lg:w-[89px] h-auto object-cover" alt="Live Kanvas" src={logo12} />
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-8 flex-1">
              {[{ text: 'About Us' }, { text: 'Creators' }, { text: 'Contact Us' }, { text: 'Blog' }, { text: 'Help Center' }].map((l) => (
                <a key={l.text} href={`#${l.text.toLowerCase().replace(/\s+/g, '-')}`} className="font-[family-name:var(--font-lato)] font-semibold text-white text-sm md:text-base lg:text-xl hover:text-[#e2283f] transition-colors">{l.text}</a>
              ))}
            </nav>
            <div className="flex flex-col items-start lg:items-end gap-1.5">
              <p className="font-[family-name:var(--font-roboto)] text-white text-sm md:text-base lg:text-xl">Follow us on</p>
              <div className="flex items-center gap-3">
                {[{ icon: facebookIcon, n: 'Facebook' }, { icon: xIcon, n: 'X' }, { icon: instagramIcon, n: 'Instagram' }, { icon: linkedinIcon, n: 'LinkedIn' }].map((s) => (
                  <a key={s.n} href="#" className="hover:opacity-80 transition-opacity">
                    <img className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] lg:w-[48px] lg:h-[48px] object-contain" alt={s.n} src={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-5 md:mt-8 gap-3">
            <p className="font-[family-name:var(--font-lato)] font-medium text-[#ffffff7a] text-xs md:text-sm lg:text-base">2025 LiveKanvas. All rights reserved.</p>
            <nav className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1">
              {['Privacy Statement', 'Terms of Service', 'Cookies Policy', 'Cookies Preferences'].map((t) => (
                <a key={t} href={`#${t.toLowerCase().replace(/\s+/g, '-')}`} className="font-[family-name:var(--font-lato)] font-medium text-[#ffffff7a] text-xs md:text-sm lg:text-base underline hover:text-white transition-colors">{t}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
