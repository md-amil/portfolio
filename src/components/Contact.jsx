import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = 'amilalisahil072@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open default mail client with prefilled body
    const mailtoUrl = `mailto:${email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-dark text-cream py-24 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column Info */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase">
            <span className="text-accent font-semibold">06</span>
            <span>/</span>
            <span>CONTACT</span>
          </div>

          <div className="text-xs font-mono tracking-widest text-cream/50 uppercase">
            HAVE A GOOD PROBLEM?
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-white">
            Let’s make<br />
            <span className="text-accent italic font-serif">something useful.</span>
          </h2>

          <p className="text-base sm:text-lg text-cream/80 max-w-md leading-relaxed">
            For full-time roles, freelance builds, or a thoughtful hello — my inbox is open.
          </p>

          {/* Social Links & Copy Email */}
          <div className="space-y-4 pt-4 font-mono text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <a
                href={`mailto:${email}`}
                className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-cream/70" />
              <a
                href="https://github.com/md-amil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 text-cream/70" />
              <a
                href="https://www.linkedin.com/in/md-amil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Copy Email Button */}
            <div className="pt-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-cream/90 text-xs font-mono border border-white/15 transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-6 bg-cream text-charcoal p-8 sm:p-12 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-mono tracking-widest text-charcoal/70 uppercase mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Smith"
                className="w-full px-4 py-3.5 bg-[#EAE6DD]/70 focus:bg-[#EAE6DD] text-charcoal border border-black/10 focus:border-accent outline-none font-sans text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-charcoal/70 uppercase mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full px-4 py-3.5 bg-[#EAE6DD]/70 focus:bg-[#EAE6DD] text-charcoal border border-black/10 focus:border-accent outline-none font-sans text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-charcoal/70 uppercase mb-2">
                WHAT ARE YOU THINKING ABOUT?
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="A little context goes a long way..."
                className="w-full px-4 py-3.5 bg-[#EAE6DD]/70 focus:bg-[#EAE6DD] text-charcoal border border-black/10 focus:border-accent outline-none font-sans text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white text-xs font-mono font-semibold tracking-wider uppercase transition-colors"
            >
              <span>{submitted ? 'Inquiry Sent!' : 'Send inquiry'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="text-xs font-mono text-charcoal/60 pt-2">
              I’ll get back to you as soon as I can.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
