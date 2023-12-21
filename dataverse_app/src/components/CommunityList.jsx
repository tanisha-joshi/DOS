import React,{useState} from 'react'
import {Box,Divider,Typography} from "@mui/material"
import CommunityHeader from "./CommunityHeader"
import WidgetWrapper from "./WidgetWrapper"
import {useNavigate} from 'react-router-dom'
import { useContractRead ,useContractReads} from 'wagmi'
import { abi, address } from '../constants'


const communityLists=[
    {
        communityName:"Shitx",
        communityProfilePic:"",
        address:"",
        members:"25"
    },
    {
        communityName:"Shitx2",
        communityProfilePic:"",
        address:"",
        members:"25"
    },
    {
        communityName:"Shitx3",
        communityProfilePic:"",
        address:"",
        members:"25"
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
const navigate = useNavigate()
  return (
    <>
     <WidgetWrapper mt={"1rem"} border="1px solid black">
            <Typography color={"#fdfdfd"} 
              variant="h5"
              fontWeight="500"
              sx={{p:"1rem"}}
            >
           Join Community
            </Typography>
            <Box display="flex" flexDirection="column" color={"whitesmoke"} gap="0rem">
             {
              communityLists?.map((c)=>{
                const post = c.result
                
                    
                    return(
                      <>
                      <CommunityHeader post={c} />
                      <Divider sx={{backgroundColor:"#575859",marginBottom:"1rem"}}/>
                      </>
                      
                    )
                })
             }
            </Box>
        </WidgetWrapper>
    </>
  )
}

export default CommunityList