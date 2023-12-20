import React from "react";
import { FaLock, FaUserGroup, FaWallet } from "react-icons/fa6";
import { GiFallingStar } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";



export default function Features() {
  return (
    <div className="mt-12 mb-16 px-12">
      <div className="text-4xl mb-12">Our Features</div>

      <div className="grid gap-y-12  gap-x-12  self-center  border-red-500   grid-cols-2  pt-10">
        <div className="card card-side bg-[#193849] h-40 shadow-xl">
          <figure>
            <FaLock className="h-32 ml-4 " />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title self-start text-2xl">
              Restrict access to content
            </h2>
            <p className="text-justify">
              Ensure the utmost privacy and exclusivity for your community by
              implementing restricted access.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 h-40 shadow-xl">
          <figure>
            <GiFallingStar className="h-36 ml-4 " />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title self-start text-2xl">Like a breeze!</h2>
            <p className="text-left">
              Ours is an extremely user-friendly platform. The intuitive
              interface allows everyone to create and join communities.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 h-40 shadow-xl">
          <figure>
            <FaWallet className="h-36 ml-4 " />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title self-start text-2xl">Universal Compatibility</h2>
            <p className="text-left">
              Seamlessly integrate your existing cryptocurrency wallet with our
              platform for easy onboarding.
            </p>
          </div>
        </div>
        <div className="card card-side bg-[#193849] h-40 shadow-xl">
          <figure>
            <HiUserGroup className="h-36 ml-4 " />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title self-start text-2xl">Thriving community</h2>
            <p className="text-left">
            Foster a thriving community experience with features that promote active engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
