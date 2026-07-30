"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {

  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ];


  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >


      {/* Animated Background Glow */}

      <motion.div

        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-96
        h-96
        bg-blue-600/20
        rounded-full
        blur-3xl
        "

      />



      <div className="container mx-auto px-6 relative z-10">


        <div className="grid md:grid-cols-2 gap-12 items-center">



          {/* LEFT CONTENT */}


          <motion.div

            initial={{
              opacity:0,
              x:-80
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8
            }}

          >


            <motion.p

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:0.2
              }}

              className="
              text-blue-400
              text-lg
              font-medium
              "
            >

              Hello, I'm

            </motion.p>




            <motion.h1

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:0.3
              }}

              className="
              text-5xl
              md:text-7xl
              font-bold
              mt-4
              tracking-tight
              "

            >

              YH Prasad

            </motion.h1>





            {/* Typing Animation */}

            <motion.div

              initial={{
                opacity:0
              }}

              animate={{
                opacity:1
              }}

              transition={{
                delay:0.5
              }}

            >

              <h2
                className="
                text-2xl
                md:text-4xl
                font-semibold
                text-gray-300
                mt-5
                "
              >

                <TypeAnimation

                  sequence={[
                    "Full Stack Developer",
                    2000,

                    "Next.js Developer",
                    2000,

                    "MERN Stack Developer",
                    2000,

                    "Software Engineering Undergraduate",
                    2000
                  ]}

                  speed={50}

                  repeat={Infinity}

                />


              </h2>


            </motion.div>





            <motion.p

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:0.7
              }}

              className="
              text-gray-400
              text-lg
              mt-6
              max-w-xl
              leading-relaxed
              "

            >

              I build modern, scalable web applications
              using React, Next.js, Node.js and database
              technologies. Passionate about clean code,
              system design, and solving real-world problems
              through software.

            </motion.p>





            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mt-8">


              {
                technologies.map((tech,index)=>(


                  <motion.span

                    key={tech}


                    initial={{
                      opacity:0,
                      y:20
                    }}


                    animate={{
                      opacity:1,
                      y:[0,-5,0]
                    }}


                    transition={{

                      opacity:{
                        delay:0.8 + index*0.1
                      },

                      y:{
                        duration:2,
                        repeat:Infinity,
                        delay:index*0.2
                      }

                    }}


                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-sm
                    text-gray-300
                    "

                  >

                    {tech}

                  </motion.span>


                ))
              }


            </div>






            {/* Buttons */}


            <motion.div

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:1
              }}

              className="
              flex
              flex-wrap
              gap-5
              mt-10
              "

            >


              <motion.a

                href="#projects"

                whileHover={{
                  scale:1.08
                }}

                whileTap={{
                  scale:0.95
                }}

                className="
                bg-blue-600
                hover:bg-blue-700
                px-7
                py-3
                rounded-lg
                font-medium
                shadow-lg
                shadow-blue-500/30
                "

              >

                View Projects

              </motion.a>





              <motion.a

                href="/resume.pdf"

                download

                whileHover={{
                  scale:1.08
                }}

                whileTap={{
                  scale:0.95
                }}

                className="
                border
                border-gray-600
                px-7
                py-3
                rounded-lg
                font-medium
                hover:bg-white
                hover:text-black
                transition
                "

              >

                Download CV

              </motion.a>



            </motion.div>





            {/* Social Links */}


            <div className="
              flex
              gap-6
              mt-10
              text-gray-400
            ">


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



          </motion.div>








          {/* PROFILE IMAGE */}



          <motion.div

            initial={{
              opacity:0,
              x:80
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:1
            }}

            className="
            flex
            justify-center
            "

          >



            <motion.div

              animate={{
                y:[0,-15,0]
              }}

              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
              }}


              className="
              relative
              w-72
              h-72
              md:w-96
              md:h-96
              "

            >



              {/* Rotating Ring */}

              <motion.div

                animate={{
                  rotate:360
                }}

                transition={{
                  duration:20,
                  repeat:Infinity,
                  ease:"linear"
                }}

                className="
                absolute
                inset-0
                rounded-full
                border-2
                border-blue-500/50
                "

              />





              {/* Image */}


              <div

                className="
                absolute
                inset-4
                rounded-full
                overflow-hidden
                border-4
                border-blue-500
                "

              >

                <Image

                  src="/image1.jpeg"

                  alt="YH Prasad"

                  fill

                  className="object-cover"

                  priority

                />


              </div>



            </motion.div>


          </motion.div>



        </div>


      </div>


    </section>
  );
}