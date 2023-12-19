import React from "react";

export default function Landing(){



    return (

        <div className="min-h-screen  flex flex-col items-center justify-center   gap-2">
           <div className="text-5xl ">Private communities</div> 
            <div className="text-5xl">for content that <span className="text-sky-300">matters</span></div>
            <div className="flex mt-5 gap-6 ">
                <button className="px-8 rounded-md py-3 bg-[#40a2db]">Create</button>
                <button className="px-8 rounded-md bg-gray-100 text-blue-900 py-3"> Explore </button>
            </div>
            
            

        </div>
    )
}