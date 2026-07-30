export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center px-6 py-5">

        <h1 className="text-2xl font-bold text-blue-500">
          YH
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}