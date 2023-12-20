import React from 'react'
import CreateCommunity from "../components/CreateCommunity";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const CreateCommunityPage = ({handle}) => {
  return (
    <div className=" text-white m-0 p-0 bg-[#070e1c] min-h-screen box-border flex flex-col">
     <Navbar  handleFunction= {handle}/>
     <div style={{marginTop:"3rem"}}>
    <CreateCommunity  />
     </div>
     <Footer/>
    </div>
  )
}

export default CreateCommunityPage