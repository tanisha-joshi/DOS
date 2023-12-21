import "./App.css";
import React, { useState, useCallback } from "react";
import { DataverseConnector, WALLET } from '@dataverse/dataverse-connector';

// import { WalletProvider } from "@dataverse/wallet-provider";
import {
  useApp,
  
} from "@dataverse/hooks";
import { ModelParser, Output } from "@dataverse/model-parser";
import app from "../output/app.json";

import CommunityPostPage from './pages/CommunityPostPage.jsx'
import SingleCommunityPage from './pages/SingleCommunityPage'
import HomePage from '../src/pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCommunityPage from './pages/CreateCommunityPage'


const modelParser = new ModelParser(app as Output );
export default function App(){



  const { connectApp } = useApp({


    appId: modelParser.appId,
    autoConnect: true,
    onSuccess: result => {
      console.log("[connect]connect app success, result:", result);
    },
  });

const handle = ()=>{
  connectApp()
  // walletProvider.connectWallet()
  // connectWallet().then(d => console.log(d))
}



// const dataverseConnector = new DataverseConnector();
// const walletProvider = new WalletProvider()
// console.log("wpa",walletProvider.isConnected)




  
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage handle={handle} />}/>
   <Route path="/postsPage" element={<CommunityPostPage handle={handle}  />}/>
   <Route path="/createCommunity" element={<CreateCommunityPage handle={handle} />}/>
   <Route path="/SingleCommunity" element={<SingleCommunityPage handle={handle} />}/>
   </Routes>
   </BrowserRouter>
  )
}