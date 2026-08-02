export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/60 backdrop-blur-sm py-10 relative overflow-hidden">
      {/* Subtle backdrop overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-sm font-semibold tracking-wide text-white">
            YH PRASAD<span className="text-emerald-400">.</span>
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Building performance-oriented software for web & mobile.
          </p>
        </div>

        <p className="text-xs text-slate-500 font-medium md:order-last">
          &copy; {new Date().getFullYear()} YH Prasad. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-xs font-semibold text-slate-400">
          <a
            href="https://github.com/yhprasadhew"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yh-prasad-35b570268"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yhprasadhew@gmail.com"
            className="hover:text-emerald-400 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}