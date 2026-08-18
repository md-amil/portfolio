import React from 'react';

export default function Experience() {
  const timeline = [
    {
      period: 'JUN 2023 — PRESENT',
      role: 'Fullstack Developer',
      company: 'Khan Global Studies',
      description:
        'Led end-to-end development with React, Next.js, and Nest.js; owned scalable architecture, SSR, adaptive streaming, WebSockets, React Query, sprint planning, and delivery reliability.',
    },
    {
      period: 'JUL 2021 — JUN 2023',
      role: 'Mobile Developer',
      company: 'Civilsdaily',
      description:
        'Developed a high-performance React Native application across iOS and Android, with WebView integrations and maintainable Redux state management.',
    },
    {
      period: 'NOV 2020 — JUL 2021',
      role: 'Fullstack Developer',
      company: 'Dpad Finance',
      description:
        'Integrated Web3.js for Ethereum smart-contract interactions and built dynamic, SEO-friendly server-rendered experiences with EJS.',
    },
    {
      period: 'APR 2020 — NOV 2020',
      role: 'React Native Developer',
      company: 'Munchin',
      description:
        'Shipped a cross-platform mobile app with Google OAuth authentication and RESTful Axios integrations for a responsive user experience.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Header Column */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-charcoal/70 uppercase">
            <span className="text-accent font-semibold">05</span>
            <span>/</span>
            <span>EXPERIENCE</span>
          </div>

          <div className="text-xs font-mono tracking-widest text-muted uppercase">
            THE LONG VIEW
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-charcoal">
            From first commit<br />
            <span className="text-accent italic font-serif">to full ownership.</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal/80 max-w-md leading-relaxed">
            A timeline of roles where shipping, learning, and taking responsibility moved together.
          </p>
        </div>

        {/* Right Timeline Column */}
        <div className="lg:col-span-7 space-y-12 pl-0 sm:pl-4 border-l border-black/10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 space-y-3 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-200" />

              <div className="text-xs font-mono text-accent font-semibold tracking-widest uppercase">
                {item.period}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-normal">
                {item.role}
              </h3>

              <div className="text-sm font-semibold text-charcoal/90">
                {item.company}
              </div>

              <p className="text-base text-charcoal/75 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Bar */}
      <div className="mt-24 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-6 text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="text-muted uppercase tracking-widest">EDUCATION</span>
          <span className="font-semibold text-charcoal">Graduation — L.N.M University</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-muted uppercase tracking-widest">CERTIFICATIONS</span>
          <span className="font-semibold text-charcoal">
            Web Development — Code with Mosh • DevOps — KodeKloud
          </span>
        </div>
      </div>
    </section>
  );
}
