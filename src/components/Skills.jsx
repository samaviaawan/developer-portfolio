import React from "react";

const skills = [
  {
    name: "HTML5",
    icon: "◈",
    level: 95,
    desc: "Semantic markup, accessibility, SEO-friendly structure",
    color: "#E34F26",
  },

  {
    name: "CSS3",
    icon: "◇",
    level: 90,
    desc: "Flexbox, Grid, animations, custom properties, transitions",
    color: "#1572B6",
  },
 {
    name: "JavaScript",
    icon: "JS",
    level: 80,
    desc: "ES6+, async/await, DOM manipulation, modern JS patterns",
    color: "#F7DF1E",
  },
  
  {
    name: "React",
    icon: "⚛",
    level: 85,
    desc: "Functional components, hooks, state management, React Router",
    color: "#61DAFB",
  },

  {
    name: "Responsive Design",
    icon: "⊡",
    level: 92,
    desc: "Mobile-first approach, fluid layouts, cross-device compatibility",
    color: "#C9A84C",
  },
  {
    name: "Git & GitHub",
    icon: "◉",
    level: 75,
    desc: "Version control, branching, pull requests, collaboration",
    color: "#F05032",
  },
];

function SkillCard({ name, icon, level, desc, color, index }) {
  return (
    <div
      className={`reveal delay-${(index % 4) + 1} group relative bg-navy-card border border-white/8 rounded-xl p-5 card-hover cursor-default overflow-hidden`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}10, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon + Name */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold border"
              style={{
                background: `${color}18`,
                borderColor: `${color}30`,
                color: color,
                fontFamily: name === "JavaScript" ? "monospace" : "inherit",
              }}
            >
              {icon}
            </span>
            <span className="font-body font-medium text-white/90 text-sm">{name}</span>
          </div>
          <span
            className="text-[10px] font-body font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${color}18`, color: color }}
          >
            {level}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-px bg-white/5 rounded-full mb-3 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, ${color}60, ${color})`,
            }}
          />
        </div>

        {/* Description */}
        <p className="text-white/35 text-xs font-body leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label reveal">What I Work With</span>
          <div className="flex justify-center mt-2 mb-6">
            <div className="gold-line w-12" />
          </div>
          <h2 className="reveal delay-1 font-display text-4xl lg:text-5xl text-white font-bold leading-tight">
            Skills &{" "}
            <span className="italic text-gold">Technologies</span>
          </h2>
          <p className="reveal delay-2 mt-4 text-white/45 font-body max-w-lg mx-auto leading-relaxed">
            A focused toolkit built around React and modern frontend development — every tool chosen with purpose.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} index={i} />
          ))}

          {/* CTA card */}
          <div className="reveal delay-4 group bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-5 card-hover flex flex-col justify-between cursor-default">
            <div>
              <span className="text-gold text-2xl">✦</span>
              <h3 className="font-display text-white text-xl mt-3 mb-2 font-semibold">
                Always Learning
              </h3>
              <p className="text-white/45 text-xs font-body leading-relaxed">
                Continuously expanding into TypeScript, Next.js, and advanced animation libraries.
              </p>
            </div>
            <div className="mt-4 text-gold text-xs font-body tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
              Growing fast <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
