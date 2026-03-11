import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/samaviaawan", icon: "◉" },
  { label: "linkdIn", href: "https://www.linkedin.com/in/samavia-awan-b2387535a/", icon: "✦" },
  // { label: "Upwork", href: "https://upwork.com", icon: "◈" },
  { label: "Email", href: "mailto:samaviawan2007@gmail.com", icon: "✉" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-mid">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-sm bg-gold flex items-center justify-center text-navy font-display font-bold text-sm">
              S
            </span>
            <span className="font-body font-medium text-sm tracking-widest uppercase text-white/60">
              Samavia<span className="text-gold">.</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] tracking-widest uppercase font-body text-white/35 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/8 bg-navy-card flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all duration-300 text-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/25 text-xs font-body">
            © 2026{" "}
            <span className="text-gold/60">Samavia Awan</span>{" "}
            — React Developer
          </p>
          <p className="text-white/20 text-[10px] font-body tracking-wider uppercase">
            Built with React · Tailwind CSS · Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
