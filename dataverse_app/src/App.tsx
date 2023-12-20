import "./App.css";
import React, { useState, useCallback } from "react";


import {
  useApp,
  
} from "@dataverse/hooks";
import { ModelParser, Output } from "@dataverse/model-parser";
import app from "../output/app.json";

import CommunityPostPage from './pages/CommunityPostPage.jsx'
import HomePage from '../src/pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCommunityPage from './pages/CreateCommunityPage'


const modelParser = new ModelParser(app as Output );
export default function App(){

  const { connectApp } = useApp({


    appId: modelParser.appId,
    autoConnect: false,
    onSuccess: result => {
      console.log("[connect]connect app success, result:", result);
    },
  });

const handle = ()=>{
  connectApp()
}
  
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage handle={handle} />}/>
   <Route path="postsPage" element={<CommunityPostPage handle={handle}  />}/>
   <Route path="createCommunity" element={<CreateCommunityPage handle={handle} />}/>
   </Routes>
   </BrowserRouter>
  )
}