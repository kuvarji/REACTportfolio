
import {motion} from'framer-motion'
function Scroll() {
  return (
   
    <div className="w-full py-10 mt-12 sm:mt-20 ">
      <div className=" w-full  flex overflow-hidden  whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className="text-5xl sm:text-9xl text-black font-ralway font-bold leading-none sm:pl-32 pr-6">
            Featured work 
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className="text-5xl sm:text-9xl text-black font-ralway font-bold leading-none sm:pl-16 pr-6">
          Featured work 
        </motion.h1>
        
      </div>
    </div>
  )
}

export default Scroll
