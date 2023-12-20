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
import CommunityPostPage from './pages/CommunityPostPage.jsx'

export default function App(){

  
  return (
    <div className=" text-white m-0 p-0 box-border flex flex-col">
      
      {/* <Navbar />
      <Footer /> */}
      <CommunityPostPage/>
      
       </div>
  )
}