import React, { useState } from "react";
import {address,abi} from "../constants"

import { useContractWrite, usePrepareContractWrite } from 'wagmi'


export default function CreateCommunity() {
  const [name,setName] = useState("")
  const [desc,setDesc] = useState("")
  const [img,setImg] = useState("")
  const [price,setPrice] = useState("")
  const { config } = usePrepareContractWrite({
    address: address,
    abi: abi,
    functionName: 'CreateNewCommunity',
    args:[name,desc,img]
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(config)


  console.log(img)

const handleCreate = ()=>{


}


  return (
    <div className="min-h-screen flex flex-col  items-center  py-6 px-12">

      <div className="text-4xl">Create Community</div>

      <div className=" mt-8 flex flex-col gap-6  w-[50%] bg-[#0c1a21] px-4 py-8 rounded-2xl items-center justify-center ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your community called?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e=>setName(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Describe your community</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="This community is for..." 
            onChange={e=>setDesc(e.target.value)}

          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload a cover icon</span>
          </div>
          <input
            type="text"
            placeholder="Type Image Url"
            className="input input-bordered w-full max-w-xs"
            onChange={e=>setImg(e.target.value)}
          />
        </label>


        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter joining fee in ETH</span>
          </div>
          <input
            type="number"
            placeholder="0.12"
            className="input input-bordered w-full max-w-xs"
            onChange={e=>setPrice(e.target.value)}

          />
        </label>

        <button onClick={write} disabled={isLoading || !write} className="btn  bg-[#53ade0] text-white">Create</button>


      </div>
    </div>
  );
}
