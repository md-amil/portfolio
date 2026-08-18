import React from 'react';

export default function Toolkit() {
  const categories = [
    {
      num: '01',
      title: 'LANGUAGES & FRAMEWORKS',
      skills: [
        { name: 'JavaScript / TypeScript', level: 95 },
        { name: 'React / Next.js', level: 92 },
        { name: 'React Native', level: 88 },
        { name: 'Node.js / Express.js', level: 85 },
        { name: 'Nest.js', level: 80 },
        { name: 'PHP / Laravel', level: 75 },
        { name: 'Dart / Flutter', level: 70 },
      ],
    },
    {
      num: '02',
      title: 'FRONTEND & STATE',
      skills: [
        { name: 'Redux', level: 90 },
        { name: 'Zustand', level: 85 },
        { name: 'Context API', level: 92 },
        { name: 'React Query', level: 88 },
        { name: 'React Router', level: 90 },
        { name: 'Responsive UI', level: 95 },
      ],
    },
    {
      num: '03',
      title: 'BACKEND & API',
      skills: [
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 82 },
        { name: 'WebSockets / Socket.IO', level: 85 },
        { name: 'Bull.js', level: 78 },
        { name: 'JWT / OAuth', level: 88 },
      ],
    },
    {
      num: '04',
      title: 'DATA, DEVOPS & TOOLS',
      skills: [
        { name: 'MongoDB / Mongoose', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Firebase', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 78 },
        { name: 'NGINX', level: 72 },
        { name: 'FFmpeg', level: 68 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-dark text-cream py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase">
          <span className="text-accent font-semibold">04</span>
          <span>/</span>
          <span>TOOLKIT</span>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-10">
          {categories.map((cat) => (
            <div key={cat.num} className="space-y-8">
              {/* Category Title */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cream/70 border-b border-white/10 pb-3">
                <span className="text-accent font-semibold">{cat.num}</span>
                <span>/</span>
                <span className="text-accent font-medium uppercase">{cat.title}</span>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="text-sm font-sans text-cream/90 group-hover:text-white transition-colors">
                      {skill.name}
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-0.5 w-full bg-white/15 relative overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-700 ease-out group-hover:bg-accent-hover"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
