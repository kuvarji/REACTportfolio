import { Link } from "react-router-dom"


import { useGSAP } from '@gsap/react'
import gsap from "gsap"
function Social() {
  useGSAP(()=>{
    const t1  = gsap.timeline()
    t1.from('.social',{
      y:100,
      delay:3,
      duration:1,
      opacity:0,
      stagger:0.2
  
    })
    
   
    
  
   
  })


  return (
    <div className=" w-full h-auto flex justify-center sm:mt-24 mt-12 items-center">
      <div className=" flex justify-center gap-6 sm:gap-16">
       <Link to="https://github.com/kuvarji"> <div className=" social  sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] rounded-full border-2 ">
            <img src="/git.png" alt="" />
        </div></Link>
        <Link to="https://www.linkedin.com/in/kuvarji-gupta/">  <div className=" social w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-full border-2">
            <img src="/linkdin.png" alt="" />
        </div></Link>
        <Link to="#">  <div className=" social w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-full border-2 ">
            <img src="x.png" alt="" />
        </div></Link>
        <Link to="https://www.instagram.com/kuvarji_gupta_0101/"> <div className=" social w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-full border-2 ">
            <img src="insta.png" alt="" />
        </div></Link>
      </div>
    </div>
  )
}

export default Social
