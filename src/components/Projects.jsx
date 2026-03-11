import React, { useState } from "react";

const projects = [
  {
    id: 1,
    num: "01",
    title: "SaaS Landing Page",
    category: "Web Design · React",
    desc: "Modern SaaS website featuring a compelling hero section, feature highlights, tiered pricing table, and a high-converting CTA. Clean, fast, and built for growth.",
    tags: ["React", "Tailwind CSS", "Responsive", "Animations"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80",
    color: "#6366F1",
    liveUrl: "#",
    githubUrl: "#",
    highlights: ["Hero + CTA sections", "Pricing tables", "Feature grids"],
  },
  {
    id: 2,
    num: "02",
    title: "AI Tool Landing Page",
    category: "UI Design · React",
    desc: "Sleek landing page for an AI writing assistant — showcasing powerful features with a modern dark UI, animated components, and a seamless responsive experience.",
    tags: ["React", "CSS Animations", "Dark UI", "Modern"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&auto=format&fit=crop&q=80",
    color: "#C9A84C",
    liveUrl: "#",
    githubUrl: "#",
    highlights: ["AI feature showcase", "Dark luxury UI", "Mobile-first"],
  },
  {
    id: 3,
    num: "03",
    title: "Startup Product Page",
    category: "Marketing · React",
    desc: "Startup product marketing website with engaging feature sections, customer testimonials, and persuasive copy — designed to drive conversions from day one.",
    tags: ["React", "Tailwind", "Testimonials", "SEO-ready"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&auto=format&fit=crop&q=80",
    color: "#10B981",
    liveUrl: "#",
    githubUrl: "#",
    highlights: ["Feature sections", "Testimonials", "CTA optimization"],
  },
];

function ProjectCard({ num, title, category, desc, tags, image, color, liveUrl, githubUrl, highlights, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`reveal delay-${index + 1} group relative bg-navy-card border border-white/8 rounded-2xl overflow-hidden card-hover`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/40 to-navy-card" />

        {/* Project number */}
        <span
          className="absolute top-4 left-4 font-display text-5xl font-bold leading-none opacity-30"
          style={{ color }}
        >
          {num}
        </span>

        {/* Category */}
        <span
          className="absolute top-4 right-4 text-[9px] tracking-widest uppercase font-body font-medium px-3 py-1.5 rounded-full border"
          style={{ background: `${color}18`, borderColor: `${color}30`, color }}
        >
          {category.split(" · ")[0]}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-xl text-white font-semibold leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-white/45 text-sm font-body leading-relaxed mb-4">{desc}</p>

        {/* Highlights */}
        <ul className="space-y-1 mb-5">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs font-body text-white/35">
              <span style={{ color }} className="text-[8px]">◆</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[9px] tracking-wide uppercase font-body px-2.5 py-1 rounded-full border"
              style={{ background: `${color}10`, borderColor: `${color}20`, color: `${color}cc` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a
            href={liveUrl}
            className="flex-1 btn-gold justify-center text-[10px] py-2.5"
            style={{ background: color, color: "#0B1225" }}
          >
            Live Demo ↗
          </a>
          <a
            href={githubUrl}
            className="flex-1 btn-outline-gold justify-center text-[10px] py-2.5"
            style={{ borderColor: `${color}40`, color }}
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${color}25` }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label reveal">My Work</span>
            <div className="gold-line w-12 mt-2 mb-4" />
            <h2 className="reveal delay-1 font-display text-4xl lg:text-5xl text-white font-bold leading-tight">
              Featured{" "}
              <span className="italic text-gold">Projects</span>
            </h2>
          </div>
          <p className="reveal delay-2 text-white/40 font-body text-sm max-w-xs leading-relaxed md:text-right">
            Real-world React projects — designed with care, built with precision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} {...p} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-14 text-center">
          <p className="text-white/35 font-body text-sm mb-4">More projects on the way ✦</p>
          <a href="#contact" className="btn-outline-gold">
            Let's Build Something Together →
          </a>
        </div>
      </div>
    </section>
  );
}
