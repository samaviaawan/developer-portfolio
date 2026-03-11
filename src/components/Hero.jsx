import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px] animate-pulse-gold" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-900/20 blur-[100px]" />
        {/* Decorative lines */}
        <div className="absolute top-0 right-24 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-32 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 rounded-full px-4 py-1.5 mb-8"
              style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gold/80 text-[10px] tracking-widest uppercase font-body">
                Available for Projects
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-4"
              style={{ animation: "fadeUp 0.7s ease 0.2s both" }}
            >
              <span className="text-white block">Samavia</span>
              <span className="text-gradient-gold block italic">Awan</span>
            </h1>

            {/* Title */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{ animation: "fadeUp 0.7s ease 0.35s both" }}
            >
              <span className="gold-line w-8" />
              <span className="section-label">Frontend Developer
React.js | Modern Web Interfaces</span>
            </div>

            {/* Tagline */}
            <p
              className="font-body text-white/55 text-lg leading-relaxed max-w-md mb-10"
              style={{ animation: "fadeUp 0.7s ease 0.45s both" }}
            >
              I build{" "}
              <span className="text-white/80">modern, responsive React</span>{" "}
              landing pages for{" "}
              <span className="text-white/80">startups and businesses</span>{" "}
              — clean code, premium design.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
            >
              <a href="#projects" className="btn-gold">
                View Projects <span>↓</span>
              </a>
              <a href="#contact" className="btn-outline-gold">
                Contact Me <span>→</span>
              </a>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5"
              style={{ animation: "fadeUp 0.7s ease 0.7s both" }}
            >
              {[
                { val: "3+", label: "Projects Built" },
                { val: "100%", label: "Responsive Design" },
                { val: "React", label: "Primary Stack" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-display text-2xl text-gold font-bold leading-none">
                    {s.val}
                  </span>
                  <span className="text-[10px] text-white/35 tracking-wider uppercase font-body">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative card */}
          <div
            className="hidden lg:flex justify-center items-center"
            style={{ animation: "fadeIn 1s ease 0.5s both" }}
          >
            <div className="relative animate-float">
              {/* Main card */}
              <div className="w-72 h-80 rounded-2xl border border-gold/20 bg-navy-card/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-navy font-display font-bold text-sm">S</div>
                    <span className="text-xs text-white/60 font-body tracking-wide">samavia.dev</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>

                <div>
                  <div className="font-display text-white text-2xl font-semibold mb-1">React Dev</div>
                  <div className="text-gold/70 text-xs tracking-widest uppercase font-body mb-4">Frontend Specialist</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "JS", "Tailwind", "HTML/CSS"].map((t) => (
                      <span key={t} className="text-[10px] bg-gold/10 text-gold/80 px-2.5 py-1 rounded-full border border-gold/15 font-body">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="flex -space-x-2">
                    {["#C9A84C", "#6B7280", "#374151"].map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-navy-mid" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-white/40 text-[10px] font-body">Open to collaboration</span>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -right-4 bg-navy-card border border-gold/20 rounded-xl px-3.5 py-2 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <span className="text-gold text-sm">⚡</span>
                  <span className="text-white text-xs font-body font-medium">Fast Delivery</span>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-navy-card border border-gold/20 rounded-xl px-3.5 py-2 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <span className="text-gold text-sm">✦</span>
                  <span className="text-white text-xs font-body font-medium">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] tracking-widest uppercase text-white/50 font-body">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
