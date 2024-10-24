

import { useGSAP } from '@gsap/react'
import gsap from "gsap"
function Intro() {
    
    useGSAP(()=>{
        const t1  = gsap.timeline()
        t1.from('#por',{
          x:-100,
          delay:1,
          duration:1,
          opacity:0
      
        }),
        t1.from('#circle',{
            y:-100,
            duration:1,
            opacity:0
        
          }),
          t1.from('.web',{
            x:-100,
            duration:1,
            opacity:0
        
          })
       
        
      
       
      })

  return (
   <>
   
    <div className="w-full mt-8 h-auto rounded-md">
        <div className="flex justify-evenly gap-24  items-center px-2 ">
            <div>
                <div id='por'>
                <h1  className="font-ralway">
                    Hello people!
                </h1>
                </div>
            </div>
            
            <div id='circle' className="">
                <div className="w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] rounded-full border-2 border-black flex items-center justify-center  ">
              
                    <div className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] rounded-full  border-2 border-red-400  ">
                   
                    </div>

                </div>
            </div>
        </div>
        <div>

      
    <div className="w-full  h-auto  px-2 ">
<h1 className=" web text-4xl sm:text-8xl  font-ralway sm:font-semibold sm:font-ralway flex justify-center ">
Welcome my

</h1>
<h1 className=" web text-4xl sm:text-8xl font-ralway sm:font-semibold sm:font-ralway flex justify-center ">

 Portfolio.dev
</h1>
    </div>
        </div>

    </div>
   
   
   
   </>
  )
}

export default Intro
