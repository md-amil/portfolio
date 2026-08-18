import React from 'react';

export default function About() {
  const pillars = [
    { num: '01', title: 'OWN THE WHOLE FEATURE' },
    { num: '02', title: 'MAKE COMPLEXITY LEGIBLE' },
    { num: '03', title: 'KEEP LEARNING IN PUBLIC' },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column Label */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-charcoal/70 uppercase">
            <span className="text-accent font-semibold">02</span>
            <span>/</span>
            <span>ABOUT</span>
          </div>
        </div>

        {/* Right Column Content */}
        <div className="lg:col-span-9 space-y-10">
          <div className="text-xs font-mono tracking-widest text-muted uppercase">
            A PRACTICAL GENERALIST
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-charcoal">
            Curious by default.<br />
            <span className="text-accent italic font-serif">Precise by practice.</span>
          </h2>

          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl leading-relaxed">
            Over six years of hands-on experience building scalable web and mobile applications end-to-end. My work sits at the intersection of clean architecture, performance, and human-friendly interfaces.
          </p>

          {/* Pillars Divider Line & Grid */}
          <div className="pt-12 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="flex items-baseline gap-2 text-xs font-mono tracking-wider text-charcoal/80">
                <span className="text-accent font-semibold">{pillar.num}</span>
                <span>/</span>
                <span className="font-medium text-charcoal">{pillar.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
