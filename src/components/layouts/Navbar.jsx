"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];



function Logo() {
  return (
    <div
      className="
      w-10 h-10
      rounded-xl
      bg-gradient-to-br
      from-blue-500
      to-cyan-400
      flex
      items-center
      justify-center
      shadow-lg
      shadow-blue-500/30
      "
    >
      <span className="text-white font-bold">
        YH
      </span>
    </div>
  );
}



export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if(entry.isIntersecting){
            setActive(entry.target.id);
          }

        });

      },

      {
        threshold:0.4
      }

    );



    NAV_LINKS.forEach((item)=>{

      const section = document.querySelector(item.href);

      if(section){
        observer.observe(section);
      }

    });



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      observer.disconnect();

    };


  }, []);





  return (

    <motion.header

      initial={{
        y:-100,
      }}

      animate={{
        y:0,
      }}

      transition={{
        duration:0.6,
      }}

      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      "

    >



      <nav
        className={`
        mx-auto
        max-w-7xl
        px-5
        sm:px-8
        transition-all
        duration-300

        ${
          scrolled
          ? "mt-4"
          : "mt-0"
        }

        `}
      >



        <div

          className={`
          flex
          items-center
          justify-between
          rounded-2xl
          px-5
          py-3
          transition-all
          duration-300

          ${
            scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border border-slate-800 shadow-xl shadow-black/30"
            : "bg-transparent"
          }

          `}

        >




          {/* Logo */}


          <a
            href="#home"
            className="
            flex
            items-center
            gap-3
            "
          >

            <Logo />


            <div>

              <h1
                className="
                text-sm
                font-bold
                tracking-wide
                text-white
                "
              >

                YH PRASAD
                <span className="text-blue-500">
                  .
                </span>

              </h1>


              <p className="
              text-xs
              text-slate-400
              ">
                Full Stack Developer
              </p>


            </div>


          </a>







          {/* Desktop Navigation */}


          <div

            className="
            hidden
            md:flex
            items-center
            gap-1
            bg-slate-900/60
            border
            border-slate-800
            rounded-full
            p-1
            "

          >


            {
              NAV_LINKS.map((item)=>(

                <a

                  key={item.href}

                  href={item.href}

                  className={`
                  relative
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  transition

                  ${
                    active === item.href.replace("#","")
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                  }

                  `}

                >


                  {
                    active === item.href.replace("#","")
                    &&

                    <motion.span

                      layoutId="active"

                      className="
                      absolute
                      inset-0
                      rounded-full
                      bg-blue-600/20
                      border
                      border-blue-500/30
                      "

                    />

                  }


                  <span className="relative z-10">
                    {item.label}
                  </span>


                </a>


              ))
            }


          </div>






          {/* Actions */}



          <div
            className="
            flex
            items-center
            gap-3
            "
          >


            <a

              href="/resume.pdf"

              target="_blank"

              className="
              hidden
              sm:flex
              items-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-4
              py-2
              rounded-xl
              text-sm
              font-medium
              transition
              "

            >

              <Download size={15}/>

              Resume

              <ArrowUpRight size={14}/>


            </a>





            <button

              onClick={()=>setMenuOpen(!menuOpen)}

              className="
              md:hidden
              p-2
              rounded-xl
              border
              border-slate-700
              text-slate-300
              "

            >

              {
                menuOpen
                ?
                <X size={22}/>
                :
                <Menu size={22}/>
              }


            </button>


          </div>


        </div>








        {/* Mobile Menu */}



        <AnimatePresence>


          {
            menuOpen &&


            <motion.div

              initial={{
                opacity:0,
                height:0
              }}

              animate={{
                opacity:1,
                height:"auto"
              }}

              exit={{
                opacity:0,
                height:0
              }}

              className="
              md:hidden
              mt-3
              overflow-hidden
              "

            >


              <div

                className="
                bg-slate-950/95
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-4
                "

              >


                {
                  NAV_LINKS.map((item)=>(

                    <a

                      key={item.href}

                      href={item.href}

                      onClick={()=>setMenuOpen(false)}

                      className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      text-slate-300
                      hover:bg-slate-900
                      hover:text-white
                      transition
                      "

                    >

                      {item.label}

                    </a>

                  ))
                }



                <a

                  href="/resume.pdf"

                  className="
                  mt-3
                  flex
                  justify-center
                  items-center
                  gap-2
                  bg-blue-600
                  text-white
                  px-4
                  py-3
                  rounded-xl
                  "

                >

                  <Download size={15}/>

                  Download Resume


                </a>


              </div>


            </motion.div>


          }


        </AnimatePresence>



      </nav>


    </motion.header>

  );

}