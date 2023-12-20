import "./App.css";
import React, { useState, useCallback } from "react";

import {
  ChainId,
  Currency,
  DatatokenType,
} from "@dataverse/dataverse-connector";
import {
  useApp,
  useCollectFile,
  useCreateIndexFile,
  // useLoadDatatoken,
  useFeedsByAddress,
  useMonetizeFile,
  useStore,
  useUnlockFile,
  useUpdateIndexFile,
} from "@dataverse/hooks";
import { ModelParser, Output } from "@dataverse/model-parser";
import ReactJson from "react-json-view";

import app from "../output/app.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Steps from "./components/Steps";
import Features from "./components/Features";
import Carousel from "./components/Carousel";
import CreateCommunity from "./components/CreateCommunity";


export default function App(){

  
  return (
    <div className=" text-white m-0 p-0 bg-[#070e1c] min-h-screen box-border flex flex-col">
      
      {/* <Navbar />
      <Landing />
      <Features />
      <Steps />
      <Carousel />
      <Footer /> */}

      <CreateCommunity />
      
      
       </div>
  )
}