import './App.css'
import About from './Components/About'
import Certi from './Components/Certi'

import Design from './Components/Design'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Internship from './Components/Internship'
import Intro from './Components/Intro'
import Lets from './Components/Lets'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Prolink from './Components/Prolink'
import Scroll from './Components/Scroll'
import Skills from './Components/Skills'
import Social from './Components/social'
import {createBrowserRouter ,RouterProvider} from "react-router-dom"


const router = createBrowserRouter(
  [
{
  path:"/",
  element: <div className='bg-gradient-to-br w-full h-max from-yellow-200 via-neutral-200 to-cyan-400 '>
   <Navbar />
    <Intro/>
    
     <Social/>
     
     <About/>
     
     
     <Design/>
     <Prolink/>
     <Scroll/>
     <Projects/>
     <Skills/>
     <Certi/>
     <Internship/>
     <Lets/>
    
    <Footer/>   

    </div>
},
{
  path:"/about",
  element:<div className=' w-full sm:h-fit h-screen bg-gradient-to-br from-yellow-200 via-neutral-200 to-cyan-400 '>
    <Navbar />
    <Intro/>
     <Social/>
     <About/>
  </div>
},
{
  path:"/work",
  element:<div className=' w-full h-full bg-gradient-to-br from-yellow-200 via-neutral-200 to-cyan-400'>
     <Navbar />
    <Intro/>
     <Social/>
     <Design/>
     <Prolink/>

  </div>
},
{
  path:"/contact",
  element:<div  className=' w-full sm:h-fit h-fit bg-gradient-to-br from-yellow-200 via-neutral-200 to-cyan-400 '>
    <Navbar/>
    <Intro/>
    <h1 className='text-4xl flex justify-center font-semibold pt-6 font-ralway'>
      Contact us
    </h1>

    <Contact/>
  </div>
}
  ]
)


function App() {

  // bg-gradient-to-b from-yellow-200 via-neutral-200 to-cyan-400
  return (
    <>
    <RouterProvider router={router}/>
    
    

    
      
      
     
      
      
    
    </>
  )
}

export default App
