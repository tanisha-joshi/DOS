import React from "react";
import { useStore } from "@dataverse/hooks";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Navbar({ handleFunction }: any) {
  const { pkh } = useStore();

  return (
    <nav className="fixed z-[9999999] w-full flex h-16 px-4 opacity-95 justify-between  items-center bg-[#061f30] left-0 top-0">
      <div className="text-2xl h-min">ExclusiVerse</div>
      <div className="flex gap-12 h-min">
       <div className="h-min self-center"> <a href="/createCommunity">Create</a></div>
        <div className="h-min self-center"><a href="/postsPage">Explore</a></div>
        <ConnectButton />
      </div>
      {/* <button className="px-8 rounded-md py-3 bg-[#40a2db]"  onClick={handleFunction}>{pkh?pkh:"connect"}</button> */}
    </nav>
  );
}
