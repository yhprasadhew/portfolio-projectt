export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur">

      <div className="container mx-auto px-6 py-5 flex items-center">

        {/* Logo - Left */}
        <h1 className="text-2xl font-bold text-blue-500">
          YH
        </h1>


        {/* Navigation - Center */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-gray-300">

          <a 
            href="#home"
            className="hover:text-blue-400 transition"
          >
            Home
          </a>

          <a 
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a 
            href="#skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a 
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a 
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>


        {/* Right side optional */}
        <div className="ml-auto">

          <a
            href="/resume.pdf"
            className="
            hidden md:block
            border
            border-blue-500
            text-blue-400
            px-4
            py-2
            rounded-lg
            hover:bg-blue-500
            hover:text-white
            transition
            "
          >
            Resume
          </a>

        </div>


      </div>

    </nav>
  );
}