import React from 'react';

export default function SelectedWork() {
  const projects = [
    {
      num: '01',
      client: 'KHAN GLOBAL STUDIES',
      title: 'KGS ecosystem',
      category: 'WEB PLATFORM • MOBILE • COMMERCE',
      description: 'A full-stack learning ecosystem spanning the KGS dashboard, mobile app, and store. Built for scale with SSR, efficient data flows, and real-time product interaction.',
      tech: ['REACT', 'NEXT.JS', 'NEST.JS', 'REACT QUERY', 'WEBSOCKETS'],
      initials: 'Kg',
      borderColor: 'border-l-accent',
    },
    {
      num: '02',
      client: 'CIVILSDAILY',
      title: 'Civilsdaily suite',
      category: 'CROSS-PLATFORM MOBILE PRODUCT',
      description: 'A high-performance mobile experience across iOS and Android, including IAS Habitat, Studio, and Quizkr, with scalable Redux state and embedded web content.',
      tech: ['REACT NATIVE', 'REDUX', 'WEBVIEW', 'REST APIS'],
      initials: 'Cs',
      borderColor: 'border-l-[#5E7B67]',
    },
    {
      num: '03',
      client: 'KHAN GLOBAL STUDIES',
      title: 'Streaming infrastructure',
      category: 'MEDIA SYSTEMS • REAL-TIME',
      description: 'An adaptive streaming pipeline that receives HLS video, transcodes multiple quality levels, and keeps live interfaces updated through WebSockets.',
      tech: ['RTMP', 'NGINX', 'FFMPEG', 'HLS', 'WEBSOCKETS'],
      initials: 'Si',
      borderColor: 'border-l-charcoal',
    },
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Label */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-charcoal/70 uppercase">
            <span className="text-accent font-semibold">03</span>
            <span>/</span>
            <span>SELECTED WORK</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="lg:col-span-9">
          <p className="text-xl sm:text-2xl font-serif italic text-charcoal/80">
            Systems, screens, and the thinking between them.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.num}
            className={`relative bg-[#EFECE6]/70 hover:bg-[#EFECE6] border-l-4 ${project.borderColor} p-8 sm:p-12 transition-all duration-300 group overflow-hidden`}
          >
            {/* Watermark initials background */}
            <div className="absolute right-8 bottom-4 text-8xl sm:text-[10rem] font-serif font-bold text-black/[0.04] pointer-events-none select-none group-hover:text-black/[0.07] transition-colors duration-300">
              {project.initials}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Number & Client */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-accent font-semibold">{project.num}</span>
                  <span className="text-xs font-mono tracking-widest text-accent uppercase font-medium">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs font-mono tracking-widest text-charcoal/60 uppercase">
                  {project.category}
                </p>
              </div>

              {/* Description & Tech */}
              <div className="lg:col-span-7 space-y-6 lg:pl-6">
                <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-charcoal/70 pt-2">
                  {project.tech.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span className="hover:text-accent transition-colors">{t}</span>
                      {idx < project.tech.length - 1 && <span className="text-charcoal/30">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
