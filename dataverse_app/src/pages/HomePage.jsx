import React from 'react'



import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Steps from "../components/Steps";
import Features from "../components/Features";
import Carousel from "../components/Carousel";




const HomePage = ({handle}) => {
    
  return (
    <>
     <div className=" text-white m-0 p-0 bg-[#070e1c] min-h-screen box-border flex flex-col">
      
      <Navbar handleFunction= {handle} />
       <Landing />
      <Features />
      <Steps />
      <Carousel /> 
   
       <Footer /> 

      {/* <CreateCommunity /> */}
       </div>
    
    </>
  )
}

export default HomePage