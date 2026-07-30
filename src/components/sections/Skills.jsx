export default function Skills() {

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL"
  ];

  return (
    <section id="skills" className="py-20">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-5 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}