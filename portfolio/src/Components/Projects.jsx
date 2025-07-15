import {motion} from'framer-motion'
import { Link } from "react-router-dom"

function Projects() {
  return (
    <div className="w-full py-10 sm:flex sm:justify-center sm:w-full ">
      <div className=" w-full flex overflow-hidden  whitespace-nowrap">
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
        className="flex scroll-smooth"
        >

   <Link to="https://artics.onrender.com/">   
<div className="pl-60 sm:pl-80 sm:w-full  leading-none pr-2 scroll-smooth">
  
        <div className="w-[250px] sm:w-[500px] sm:h-[300px] h-[150px] border-2 rounded-md px-1 py-1 bg-slate-200">
          <div className="w-full h-[120px] sm:h-[220px] rounded-md bg-gradient-to-r from-slate-300 to-slate-500">
            <img
              className="object-cover object-center w-full h-[120px] sm:h-[220px] rounded-md"
              src="/pro1.png"
              alt="Full-stack News web"
            />
            <center>
              <h1 className="text-xs flex items-center justify-center pt-5 sm:text-lg font-ralway text-black font-semibold mt-1">
                Full-stack Article Website
              </h1>
            </center>
          </div>
        </div>
      </div>
      </Link> 
        <div className="pl-60 sm:pl-80 sm:w-full  leading-none pr-2 scroll-smooth">
        <div className="w-[250px] sm:w-[500px] sm:h-[300px] h-[150px] border-2 rounded-md px-1 py-1 bg-slate-200">
          <div className="w-full h-[120px] sm:h-[220px] rounded-md bg-gradient-to-r from-slate-300 to-slate-500">
            <img
              className="object-cover object-center w-full h-[120px] sm:h-[220px] rounded-md"
              src="/pro2.png"
              alt="Full-stack News web"
            />
            <center>
              <h1 className="text-xs flex items-center justify-center pt-5 sm:text-lg font-ralway text-black font-semibold mt-1">
                Full-stack React-App
              </h1>
            </center>
          </div>
        </div>
      </div>
      <Link to="https://main--nss-certificates.netlify.app/">

      <div className="pl-60 sm:pl-80 sm:w-full leading-none pr-2 scroll-smooth">
        <div className="w-[250px] sm:w-[500px] sm:h-[300px] h-[150px] border-2 rounded-md px-1 py-1 bg-slate-200">
          <div className="w-full h-[120px] sm:h-[220px] rounded-md bg-gradient-to-r from-slate-300 to-slate-500">
            <img
              className="object-cover object-center w-full h-[120px] sm:h-[220px] rounded-md"
              src="/pro3.png"
              alt="Full-stack News web"
            />
            <center>
              <h1 className="text-xs flex items-center justify-center pt-5 sm:text-lg font-ralway text-black font-semibold mt-1">
                Certificates Website
              </h1>
            </center>
          </div>
        </div>
      </div>
      </Link>

        </motion.div>
      </div>
    </div>
  )
}

export default Projects
