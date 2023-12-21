import React from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Landing(){
   const navigate=useNavigate()

    return (

        <div className="min-h-screen  flex flex-col items-center justify-center mt-8   gap-2">
           <div className="text-5xl ">Private communities</div> 
            <div className="text-5xl">for content that <span className="text-sky-300 font-semibold">matters</span></div>
            <div className="flex mt-5 gap-6 ">
                <button className="px-8 rounded-md py-3 bg-[#40a2db]"><Link to={"/createCommunity"} >Create</Link></button>   
                <button className="px-8 rounded-md bg-gray-100 text-blue-900 py-3" 
                 onClick={()=>navigate('/postsPage')}
                > Explore </button>
            </div>
            
            

        </div>
    )
}