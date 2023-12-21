import React,{useState,useEffect} from 'react'
import FlexBetween from './FlexBetween'
import { UserImage } from './UserImage';
import {
    Box,
    Button,
    Typography,
    Divider,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
import { PersonAdd } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const CommunityHeader = ({post}) => {
  const handleJoin = ()=>{

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
                navigate('/SingleCommunity')
              }}
            >
               {post[0]||"ShixCommunity"}
            </Typography>
            <p style={{ marginTop: "0rem", fontSize: "0.8rem", color: "grey", }}>
              {post.description||"For anything funny related to programming and software development"}
            </p>
          </Box>
          
        </Box>
      </FlexBetween>
      { (
        
              <Button
               onClick={handleJoin}
               mr="0.5rem"
          sx={{backgroundColor:"black",marginRight:"1rem",color:"#c6c9cb"}}

              >Join Now</Button>
      ) }
      
    </FlexBetween>
  )
}

export default CommunityHeader