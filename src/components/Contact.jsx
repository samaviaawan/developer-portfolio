import React, { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "samavia.awan@email.com",
    href: "mailto:samavia.awan@email.com",
    icon: "✉",
    desc: "Best for project inquiries",
    color: "#C9A84C",
  },
  {
    label: "GitHub",
    value: "github.com/samaviaawan",
    href: "https://github.com",
    icon: "◉",
    desc: "View my code & repositories",
    color: "#8B949E",
  },
  {
    label: "Fiverr",
    value: "fiverr.com/samaviaawan",
    href: "https://fiverr.com",
    icon: "✦",
    desc: "Hire me for freelance projects",
    color: "#1DBF73",
  },
  {
    label: "Upwork",
    value: "upwork.com/samaviaawan",
    href: "https://upwork.com",
    icon: "◈",
    desc: "Long-term collaboration",
    color: "#14A800",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label reveal">Get In Touch</span>
          <div className="flex justify-center mt-2 mb-6">
            <div className="gold-line w-12" />
          </div>
          <h2 className="reveal delay-1 font-display text-4xl lg:text-5xl text-white font-bold leading-tight">
            Let's Work{" "}
            <span className="italic text-gold">Together</span>
          </h2>
          <p className="reveal delay-2 mt-4 text-white/45 font-body max-w-md mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Reach out and let's create something remarkable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — contact links */}
          <div className="space-y-4">
            {contactLinks.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`reveal delay-${i + 1} group flex items-center gap-4 bg-navy-card border border-white/8 rounded-xl p-4 card-hover`}
              >
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${c.color}18`,
                    borderColor: `${c.color}30`,
                    color: c.color,
                  }}
                >
                  {c.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] tracking-widest uppercase font-body text-white/30">{c.label}</span>
                  </div>
                  <div className="text-white/80 text-sm font-body truncate group-hover:text-white transition-colors">
                    {c.value}
                  </div>
                  <div className="text-white/30 text-[10px] font-body">{c.desc}</div>
                </div>
                <span
                  className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: c.color }}
                >
                  →
                </span>
              </a>
            ))}

            {/* Availability badge */}
            <div className="reveal delay-4 flex items-center gap-3 p-4 border border-green-500/20 bg-green-500/5 rounded-xl mt-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-green-400/80 text-xs font-body">
                <span className="font-medium text-green-400">Currently available</span> for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-2">
            <div className="bg-navy-card border border-white/8 rounded-2xl p-7">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-14 h-14 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-gold text-2xl">
                    ✓
                  </div>
                  <h3 className="font-display text-xl text-white font-semibold">Message Sent!</h3>
                  <p className="text-white/45 text-sm font-body">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-white/35 font-body">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-navy-mid border border-white/8 rounded-lg px-4 py-3 text-white/80 text-sm font-body outline-none focus:border-gold/40 transition-colors placeholder:text-white/15"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-white/35 font-body">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-navy-mid border border-white/8 rounded-lg px-4 py-3 text-white/80 text-sm font-body outline-none focus:border-gold/40 transition-colors placeholder:text-white/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-widest uppercase text-white/35 font-body">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project type or inquiry"
                      className="w-full bg-navy-mid border border-white/8 rounded-lg px-4 py-3 text-white/80 text-sm font-body outline-none focus:border-gold/40 transition-colors placeholder:text-white/15"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-widest uppercase text-white/35 font-body">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-navy-mid border border-white/8 rounded-lg px-4 py-3 text-white/80 text-sm font-body outline-none focus:border-gold/40 transition-colors placeholder:text-white/15 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full justify-center py-3.5 mt-2">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
