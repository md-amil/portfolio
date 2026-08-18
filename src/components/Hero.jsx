import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Subtitle tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-muted uppercase">
            <span>FULLSTACK DEVELOPER</span>
            <span>—</span>
            <span>06+ YEARS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-serif font-normal tracking-tight leading-[1.02] text-charcoal">
            Building<br />
            products<br />
            <span className="text-accent italic font-serif">that hold up.</span>
          </h1>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-charcoal/80 max-w-xl font-normal leading-relaxed">
            I’m Md Amil — a full-stack developer who moves comfortably from database schema to pixel-perfect UI. I build useful, resilient digital products for teams that care about the details.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-hover text-white text-sm font-mono font-medium rounded-none transition-all duration-200 shadow-sm group"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium text-charcoal hover:text-accent pb-1 border-b-2 border-charcoal hover:border-accent transition-colors duration-200 group"
            >
              <span>See selected work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Polaroid Photo */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-6 lg:pt-0">
          <div className="relative w-full max-w-md">
            {/* Red Background Accent Block */}
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-sm" />

            {/* Main Polaroid Frame */}
            <div className="relative bg-white p-4 sm:p-5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out border border-black/5">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4">
                <img
                  src="/profile.jpg"
                  alt="Md Amil"
                  className="w-full h-full object-cover filter grayscale contrast-110 hover:contrast-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-8 flex items-center gap-2.5 text-xs font-mono tracking-widest text-charcoal/70 uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>OPEN TO THOUGHTFUL PROJECTS / DELHI, INDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
