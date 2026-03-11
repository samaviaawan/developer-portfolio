import React from "react";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <div className="reveal">
            <div className="relative">
              {/* Code block decoration */}
              <div className="bg-navy-card border border-white/8 rounded-2xl p-6 font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-white/20 text-xs">about.jsx</span>
                </div>
                <div className="space-y-1.5 text-[13px] leading-relaxed">
                  <div><span className="text-blue-400">const</span> <span className="text-gold/80">developer</span> <span className="text-white/40">=</span> <span className="text-white/40">{"{"}</span></div>
                  <div className="pl-4"><span className="text-green-400">name</span><span className="text-white/40">:</span> <span className="text-orange-300">"Samavia Awan"</span><span className="text-white/40">,</span></div>
                  <div className="pl-4"><span className="text-green-400">role</span><span className="text-white/40">:</span> <span className="text-orange-300">"React Developer"</span><span className="text-white/40">,</span></div>
                  <div className="pl-4"><span className="text-green-400">focus</span><span className="text-white/40">:</span> <span className="text-orange-300">"Landing Pages"</span><span className="text-white/40">,</span></div>
                  <div className="pl-4"><span className="text-green-400">available</span><span className="text-white/40">:</span> <span className="text-blue-300">true</span><span className="text-white/40">,</span></div>
                  <div className="pl-4"><span className="text-green-400">passion</span><span className="text-white/40">:</span> <span className="text-orange-300">"Clean UI/UX"</span><span className="text-white/40">,</span></div>
                  <div><span className="text-white/40">{"}"}</span></div>
                  <div className="mt-3 text-white/20">{"// Let's build something great →"}</div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-xl px-4 py-2.5 shadow-lg">
                <div className="text-navy font-display font-bold text-lg leading-none">2+</div>
                <div className="text-navy/70 text-[9px] uppercase tracking-wider font-body">Years Learning</div>
              </div>
              <div className="absolute -top-5 -left-5 bg-navy-card border border-gold/20 rounded-xl px-4 py-2.5 shadow-lg">
                <div className="text-gold font-display font-bold text-lg leading-none">React</div>
                <div className="text-white/40 text-[9px] uppercase tracking-wider font-body">Primary Stack</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal delay-2">
            <span className="section-label">About Me</span>
            <div className="gold-line w-12 mt-2 mb-6" />

            <h2 className="font-display text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
              Crafting Interfaces<br />
              <span className="italic text-gold">People Love</span>
            </h2>

            <p className="text-white/55 font-body leading-relaxed mb-4 text-[0.97rem]">
              I'm <span className="text-white/80 font-medium">Frontend Developer</span>, focused on building modern,responsive and visually engaging web interfaces.</p>

            <p className="text-white/55 font-body leading-relaxed mb-4 text-[0.97rem]">
              I work with 

digital experiences. <span className="text-white/80">React, JavaScript</span> and modern <span className="text-white/80">UI </span>practices, helping turn ideas into clean and user-friendly digital experiences.
            </p>
            {/* <p className="text-white/55 font-body leading-relaxed mb-8 text-[0.97rem]">
              Whether you're a <span className="text-white/80">startup launching a product</span>, a business looking to refresh their web presence, or a founder who needs a high-converting landing page — I'm here to bring your vision to life.
            </p> */}

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-gold">See My Work →</a>
              <a href="#contact" className="btn-outline-gold">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
