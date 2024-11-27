import {  Link } from "react-router-dom"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"


function Navbar() {

  
useGSAP(()=>{
  const t1  = gsap.timeline()
  t1.from('#port',{
    x:-100,
    duration:0.5,
    opacity:0

  }),
  t1.from('.link',{
    y:-100,
    
    duration:1,
    opacity:0,
    stagger:0.2,
    

  })
  

 
})


return (
    <>
    {/* Navbar div */}
<div className="  w-full  h-auto px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6   ">
  {/* main navbar */}
    <div className=" w-full h-auto flex justify-between">
      {/* name div */}
<div className="w-full h-[50px] sm:h-[70px] md:h-[80px]  items-center rounded-l-md  flex  ">
<div id="port" className="px-2 py-2 border-[1px] border-black  flex items-center justify-center ">
  <h1 id="portfolio" className="font-railway  font-semibold  text-sm sm:text-4xl">
    Portfolio
  </h1>
</div>
</div>
{/* link div  */}
<div className="w-full h-[50px] sm:h-[70px] md:h-[80px] flex justify-end items-center rounded-r-md  ">
<div className="flex justify-end gap-1 sm:gap-4 md:gap-12 md:px-10 px-2 sm:px-8 py-2 ">
 <Link to={"/"}> <h1 className=" link  font-ralway px-1 py-1  sm:px-4 sm:py-2 hover:bg-black  sm:border-[1px] border-slate-500 hover:text-white rounded-3xl  font-semibold sm:text-base text-slate-800 text-[10px] ">Home</h1></Link>
 <Link to={"/about"}> <h1 className=" link font-ralway px-1 py-1  sm:px-4 sm:py-2 hover:bg-black sm:border-[1px] border-slate-500 hover:text-white rounded-3xl  font-semibold sm:text-base text-slate-800  text-[10px]">About</h1></Link>
 <Link to={"/work"}> <h1 className=" link font-ralway px-1 py-1  sm:px-4 sm:py-2 hover:bg-black sm:border-[1px] border-slate-500 hover:text-white rounded-3xl  font-semibold sm:text-base text-slate-800 text-[10px]">Work</h1></Link>
  <h1 className=" link font-ralway font-semibold px-1 py-1  sm:px-4 sm:py-2 hover:bg-black sm:border-[1px] border-slate-500 hover:text-white rounded-3xl  sm:text-base text-slate-800 text-[10px]">News</h1>
  <Link to={"/contact"}> <h1 className=" link font-ralway font-semibold px-1 py-1  sm:px-4 sm:py-2 hover:bg-black sm:border-[1px] border-slate-500 hover:text-white rounded-3xl  sm:text-base text-slate-800 text-[10px]">Contact</h1></Link>
</div>
</div>
    </div>
</div>

    </>
  )
}

export default Navbar
