export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 
      w-96 h-96 bg-blue-600/20 rounded-full blur-3xl">
      </div>


      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-4xl">

          <p className="text-blue-400 text-lg font-medium mb-4">
            Hello, I'm
          </p>


          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">

            YH Prasad

          </h1>


          <h2 className="mt-5 text-2xl md:text-4xl font-semibold text-gray-300">

            Full Stack Developer
            <span className="text-blue-400">
              {" "} | {" "}
            </span>
            Software Engineering Undergraduate

          </h2>


          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">

            I build modern, scalable web applications using
            React, Next.js, Node.js, and database technologies.
            Passionate about clean architecture, user experience,
            and solving real-world problems through software.

          </p>


          {/* Technology badges */}

          <div className="flex flex-wrap gap-3 mt-8">

            {
              [
                "React",
                "Next.js",
                "JavaScript",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL"
              ].map((tech)=>(
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full 
                  bg-slate-800 border border-slate-700
                  text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))
            }

          </div>


          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">


            <a
              href="#projects"
              className="
              bg-blue-600
              px-7 py-3
              rounded-lg
              font-medium
              hover:bg-blue-700
              transition
              "
            >
              View Projects
            </a>


            <a
              href="/resume.pdf"
              download
              className="
              border border-gray-600
              px-7 py-3
              rounded-lg
              font-medium
              hover:bg-white
              hover:text-black
              transition
              "
            >
              Download CV
            </a>


          </div>


          {/* Social links */}

          <div className="flex gap-6 mt-10 text-gray-400">


            <a
              href="https://github.com/yhprasadhew"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>


            <a
              href="https://linkedin.com/in/yh-prasad-35b570268"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>


            <a
              href="mailto:yhprasadhew@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>


          </div>


        </div>

      </div>

    </section>
  );
}

//