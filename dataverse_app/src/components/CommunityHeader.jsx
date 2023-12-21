import React,{useState,useEffect} from 'react'
import FlexBetween from './FlexBetween'
import { UserImage } from './UserImage';
import { useContractWrite } from 'wagmi';
import {
    Box,
    Button,
    Typography,
    Divider,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
import { PersonAdd } from '@mui/icons-material';
import { useNavigate,createSearchParams } from 'react-router-dom';
import { abi, address } from '../constants';
const CommunityHeader = ({post,index}) => {

  const {write} = useContractWrite({
    address:address,
    abi:abi,
    functionName:"joinCommunity",
    args:[index]
  })
  console.log("post",post  )
  const handleJoin = ()=>{
    write()

  }
  const navigate=useNavigate()
  return (
    <FlexBetween pb={"1.1rem"}>
      <FlexBetween gap={"0.5rem"} padding={"1rem 0 0 1rem"}>
        <UserImage image={post[2]||""} />
        <Box marginLeft="">
          {/* <Typography
            sx={{
              textTransform: "capitalize",
              marginTop: "0.4rem",
              "&:hover": { cursor: "pointer", color: "gray" },
            }}
            onClick={() => {
              navigate('/SingleCommunity')
            }}
          >
            {post[0]||"ShixCommunity"}
          </Typography> */}
          <Box marginLeft={""} textAlign={"start"}  color={"whitesmoke"}>
            <Typography
              sx={{
                textTransform: "capitalize",
                marginTop: "0.4rem",
                "&:hover": { cursor: "pointer", color: "grey" },
              }}
              onClick={() => {
                navigate({
                  pathname:"/singleCommunity",
                  search:createSearchParams({
                    id: index
                }).toString()
                
                })
              }}
            >
               {post[0]||"ShixCommunity"}
            </Typography>
            <p style={{ marginTop: "0rem", fontSize: "0.8rem", color: "grey", }}>
              {post[1]}
            </p>
          </Box>
          
        </Box>
      </FlexBetween>
      { (
        
              <Button
              disabled={!write}
               onClick={handleJoin}
               mr="0.5rem"
          sx={{backgroundColor:"black",marginRight:"1rem",color:"#c6c9cb"}}

              >Join Now</Button>
      ) }
      
    </FlexBetween>
  )
}

export default CommunityHeader