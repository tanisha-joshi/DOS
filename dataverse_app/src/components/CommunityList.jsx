import React,{useState} from 'react'
import {Box,Typography} from "@mui/material"
import CommunityHeader from "./CommunityHeader"
import WidgetWrapper from "./WidgetWrapper"

import { useContractRead ,useContractReads} from 'wagmi'
import { abi, address } from '../constants'


const comunityLists=[
    {
        communityName:"Shitx",
        communityProfilePic:""
    },
    {
        communityName:"Shitx2",
        communityProfilePic:""
    },
    {
        communityName:"Shitx3",
        communityProfilePic:""
    }
]

const CommunityList = (props) => {
const communities = props.communities
  

  // const [list, setList] = useState([]);

const contractDetails = {
  address: address,
  abi: abi,
  functionName:"getCommunityDetails"
}


const contracts = communities?.map((item,k) =>{
      
  console.log("k",k)
  return{
    ...contractDetails,
     
      args:[k],
  }

}

)
// console.log("contr",contracts[0])
  const { data, isError, isLoading ,error} = useContractReads(
    {
      contracts:contracts
    }
  )
;

console.log("data",data,error,isError,isLoading)
  return (
    <>
     <WidgetWrapper mt={"1rem"} border="1px solid black">
            <Typography color={"whitesmoke"} 
              variant="h5"
              fontWeight="500"
              sx={{p:"1rem"}}
            >
           Your Communities
            </Typography>
            <Box display="flex" flexDirection="column" color={"whitesmoke"} gap="0rem">
             {
              data?.map((c)=>{
                const post = c.result
                
                    
                    return(
                      <CommunityHeader post={post} />
                    )
                })
             }
            </Box>
        </WidgetWrapper>
    </>
  )
}

export default CommunityList