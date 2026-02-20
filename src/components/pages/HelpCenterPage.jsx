'use client';

import Header from '../layout/Header';

const IMG = '/images/kanvas';
const noiseTexture = `${IMG}/Noise.png`;

export default function HelpCenterPage() {
  const categories = ['LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM'];
  const topics = ['LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM', 'LOREM IPSUM LOREM'];

  const sections = [
    {
      title: 'News',
      date: 'January 27, 2025',
      heading: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM',
      content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM'
    },
    {
      title: 'Account',
      heading: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM',
      content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM'
    },
    {
      title: 'Manage your Podcast',
      heading: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM',
      content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM'
    },
    {
      title: 'Content Set up',
      heading: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM',
      content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM'
    }
  ];

  return (
    <div className="bg-[#181818] min-h-screen relative overflow-hidden flex flex-col lg:pb-54 pb-120 pt-0 lg:pt-10">
      {/* ── Background glow effects ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[1000px] h-[1000px] bg-red-700 blur-[220px] opacity-60 rounded-full"></div>
      </div>

      {/* Noise texture overlay */}
      <img
        className="absolute w-full h-full top-0 left-0 mix-blend-color-burn pointer-events-none z-0 object-cover opacity-30"
        alt=""
        src={noiseTexture}
      />

      <Header transparent />

      <main className="flex-1 relative z-10 pt-[120px] pb-20">
        <div className="  mx-auto px-5 md:px-10">
          
          {/* Support Header */}
          <div className="mx-auto mb-16 max-w-[1200px]">
  {/* Heading & Text - Left Aligned */}
  <h1 className="font-[family-name:var(--font-lato)] font-medium text-white text-4xl md:text-5xl lg:text-[64px] leading-tight mb-6 text-left">
    Support
  </h1>

  <p className="font-[family-name:var(--font-lato)] text-white text-lg md:text-xl leading-relaxed mb-10 text-left ">
    Have questions, feedback, or ideas? We are here to help. Whether you’re a content creator, a potential partner, or just curious about what we do, don’t hesitate to reach out.
  </p>

  {/* Search Bar - Centered */}
  <div className="relative max-w-[700px] mx-auto">
    
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-14 pr-6 py-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-[15px] text-white placeholder:text-white font-[family-name:var(--font-lato)] text-lg focus:outline-none focus:border-red-500 transition-all"
    />

    {/* Search Icon - Moved after input to avoid backdrop-blur issues */}
    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
      <img 
        src="/images/home/search.png"
        alt="Search"
        className="w-5 h-5 brightness-0 invert"
      />
    </div>
  </div>
</div>


          {/* Main Grid Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Navigation Areas */}
            <div className="flex-1 lg:max-w-[280px]">
              {/* Categories */}
              <div className="mb-12">
                <h3 className="font-[family-name:var(--font-lato)] font-bold text-white text-2xl mb-6">Categories</h3>
                <div className="flex flex-col gap-4">
                  {categories.map((cat, i) => (
                    <a key={i} href="#" className="font-[family-name:var(--font-lato)] text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors">{cat}</a>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div>
                <h3 className="font-[family-name:var(--font-lato)] font-bold text-white text-2xl mb-6">Topics</h3>
                <div className="flex flex-col gap-4">
                  {topics.map((topic, i) => (
                    <a key={i} href="#" className="font-[family-name:var(--font-lato)] text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors">{topic}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Sections */}
            <div className="flex-[4]">
              <div className="flex flex-col gap-16 max-w-[900px]">
                {sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col border-white/5 pb-4">
                    <h4 className="font-[family-name:var(--font-lato)] font-bold text-white text-2xl mb-2">{section.title}</h4>
                    {section.date && (
                      <p className="font-[family-name:var(--font-lato)] text-white/40 text-sm mb-4">{section.date}</p>
                    )}
                    <h2 className="font-[family-name:var(--font-lato)] font-extrabold text-white text-2xl md:text-3xl lg:text-[36px] tracking-wide mb-4">
                      {section.heading}
                    </h2>
                    <p className="font-[family-name:var(--font-lato)] text-white/70 text-base md:text-lg leading-relaxed max-w-[100%]">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
