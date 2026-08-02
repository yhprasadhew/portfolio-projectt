"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-emerald-400" size={18} />,
      label: "Email",
      value: "yhprasadhew@gmail.com",
      href: "mailto:yhprasadhew@gmail.com"
    },
    {
      icon: <Github className="text-emerald-400" size={18} />,
      label: "GitHub",
      value: "github.com/yhprasadhew",
      href: "https://github.com/yhprasadhew"
    },
    {
      icon: <Linkedin className="text-emerald-400" size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/yh-prasad-35b570268",
      href: "https://linkedin.com/in/yh-prasad-35b570268"
    },
    {
      icon: <MapPin className="text-emerald-400" size={18} />,
      label: "Location",
      value: "Sri Lanka",
      href: null
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="h-px w-8 bg-emerald-400" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Connect</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Contact Me
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Details Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="card-glow rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white mb-4">Let&apos;s build something great</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-6">
                I am currently open to freelance projects, internships, and entry-level software engineering roles. Feel free to reach out via email or connect with me on socials!
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-2 last:pb-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800/80">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{detail.label}</div>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Box Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 card-glow rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Your Name <span className="text-emerald-400 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none focus:border-emerald-500/50 transition-all font-medium"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Your Email <span className="text-emerald-400 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none focus:border-emerald-500/50 transition-all font-medium"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none focus:border-emerald-500/50 transition-all font-medium"
                  placeholder="Subject details"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Message <span className="text-emerald-400 font-bold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-xs sm:text-sm text-slate-200 outline-none focus:border-emerald-500/50 transition-all font-medium resize-none"
                  placeholder="Hi Prasad, I would love to talk about..."
                />
              </div>

              {error && <div className="text-xs font-semibold text-red-400">{error}</div>}

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-400/10 transition-all duration-300 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold"
                    >
                      <CheckCircle2 size={16} />
                      <span>Message sent successfully! I will reply shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}