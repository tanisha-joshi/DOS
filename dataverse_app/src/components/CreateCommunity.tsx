import React from "react";

export default function CreateCommunity() {
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
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Describe your community</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="This community is for..."></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Upload a cover icon</span>
          </div>
          <input type="file" className="file-input  file-input-bordered text-sm w-full max-w-xs" accept="image/png, image/jpeg" />
        </label>


        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter joining fee in ETH</span>
          </div>
          <input
            type="text"
            placeholder="0.12"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <button className="btn  bg-[#53ade0] text-white">Create</button>


      </div>
    </div>
  );
}
