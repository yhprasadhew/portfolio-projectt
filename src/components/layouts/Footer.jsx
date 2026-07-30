export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">

      <div className="container mx-auto px-6 text-center">

        <p className="text-gray-400">
          © 2026 YH Prasad. All rights reserved.
        </p>


        <div className="flex justify-center gap-6 mt-4 text-gray-400">

          <a
            href="https://github.com/yhprasadhew"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>


          <a
            href="https://linkedin.com/in/yh-prasad-35b570268"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>


          <a
            href="mailto:yhprasadhew@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>

        </div>


      </div>

    </footer>
  );
}