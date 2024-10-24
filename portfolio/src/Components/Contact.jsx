import { useState } from 'react'
import axios from 'axios'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"



function Contact() {
  useGSAP(()=>{
    const t1  = gsap.timeline()
    t1.from('.cp',{
      x:-100,
      
      duration:0.5,
      stagger:0.2,
      opacity:0
  
    })
  })

    const [ name , setName]= useState()
    const [ mobile , setMobile]= useState()
    const [ add , setAdd]= useState()


    const handlesubmit = (e)=>{
        e.preventDefault()
        axios.post("https://reactportfolio-backend-znfh.onrender.com/Contact",{name,mobile,add})
        .then(result => console.log(result.data))
        
        
        .catch(err => console.log(err))
    

    }
  return (
    
    <div className='w-full flex justify-center items-center'>
    <div className="w-full sm:w-[700px] sm:flex sm:justify-center h-auto mt-10 ">
      <div className=" w-full  h-auto px-2 py-2   ">
<form onSubmit={handlesubmit} method="post">
{/* 1 */}

<div className="mb-2 mt-2">
          <label htmlFor="name" className="block cp text-black font-semibold font-rale mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
          onChange={(e)=>setName(e.target.value)}
            className="w-full px-3 py-2 text-slate-400 cp font-rale text-base font-semibold bg-slate-200 border-[1px] rounded-md bg-opacity-30   focus:outline-none focus:border-slate-400"
            placeholder="Enter your name"
            required
            minLength={3}
          />
        </div>
{/* 2 */}
        <div className="mb-2">
          <label htmlFor="mobileNumber" className="block cp text-black font-rale font-semibold mb-2">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobile"
            onChange={(e)=>setMobile(e.target.value)}
            className="w-full px-3 py-2 text-slate-400 cp font-rale text-base font-semibold bg-slate-200 border-[1px] rounded-md bg-opacity-30   focus:outline-none focus:border-slate-400"
            placeholder="Enter your mobile number"
            required
            minLength={10}
          />
        </div>
        {/* 3 */}
  <div className="mb-2">
          <label htmlFor="address" className="block font-ralway cp  text-black font-rale font-semibold mb-2">Address</label>
          <textarea
            id="address"
            name="add"
            onChange={(e)=>setAdd(e.target.value)}
            className="w-full px-3 py-2 text-slate-400 font-rale cp text-base font-semibold bg-slate-200 border-[1px] rounded-md bg-opacity-30   focus:outline-none focus:border-slate-400"
            placeholder="Enter your address"
            rows="4"
            required
            minLength={4}
          ></textarea>
        </div>
        <div className='w-full  flex justify-center mt-5'>
        <button id='btn' type="submit" onClick={()=>{
          const btn = document.getElementById("btn")
          btn.addEventListener("click",function(){
            alert("Thanks for Contact")
            location.reload()
            
          })

        }}  className="text-black cp focus:text-slate-200 font-ralway border-slate-500 mt-9 py-2 px-6 rounded-3xl border-[1px]   focus:bg-black ">Submit</button>
        </div>
        

</form>

      </div>
    </div>
    </div>
  )
}

export default Contact
