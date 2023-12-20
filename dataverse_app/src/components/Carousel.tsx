import React from "react";

export default function Carousel() {
  return (
    <div className="mt-16   ">
      <div className="text-4xl my-12">Top Creators</div>
      <div className="carousel carousel-center w-[75%] p-4 py-12 space-x-16 bg-neutral rounded-box">
        <div className="carousel-item flex flex-col gap-4">
          <img src="./download.jpeg" className="rounded-box w-64" />
          <div className="text-xl">Bhupendra Jogi</div>
        </div>
        <div className="carousel-item flex flex-col gap-4">
          <img src="./download.jpeg" className="rounded-box w-64" />
          <div className="text-xl">Bhupendra Jogi</div>
        </div>
        <div className="carousel-item flex flex-col gap-4">
          <img src="./download.jpeg" className="rounded-box w-64" />
          <div className="text-xl">Bhupendra Jogi</div>
        </div>
        <div className="carousel-item flex flex-col gap-4">
          <img src="./download.jpeg" className="rounded-box w-64" />
          <div className="text-xl">Bhupendra Jogi</div>
        </div>
      </div>
    </div>
  );
}
