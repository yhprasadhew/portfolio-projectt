export default function Projects() {

  const projects = [
    {
      title: "Plant Inventory Management System",
      description:
        "A full-stack plant inventory application with authentication, admin management, and database integration.",
      tech: "Next.js, TypeScript, Prisma, PostgreSQL",
    },
    {
      title: "Project Management System",
      description:
        "A project management platform with projects, tasks, Kanban boards, and team collaboration features.",
      tech: "Next.js, Redux Toolkit, Prisma, PostgreSQL",
    },
    {
      title: "Emerald Estates",
      description:
        "A real estate MERN application with authentication, image upload, and real-time chat.",
      tech: "MongoDB, Express.js, React, Node.js",
    },
  ];


  return (
    <section id="projects" className="py-20">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold">
          Projects
        </h2>


        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-xl p-6 hover:-translate-y-2 transition"
            >

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>


              <p className="text-gray-400 mt-4">
                {project.description}
              </p>


              <p className="text-blue-400 mt-4">
                {project.tech}
              </p>


            </div>
          ))}


        </div>


      </div>

    </section>
  );
}