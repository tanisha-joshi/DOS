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
  const navigate=useNavigate()
  return (
    <FlexBetween pb={"1.1rem"}>
      <FlexBetween gap={"0.5rem"} padding={"1rem 0 0 1rem"}>
        <UserImage image={post[2]||""} />
        <Box marginLeft="0.4rem">
          <Typography
            sx={{
              textTransform: "capitalize",
              marginTop: "0.4rem",
              "&:hover": { cursor: "pointer", color: "gray" },
            }}
            onClick={() => {
              navigate('/SingleCommunity')
            }}
          >
            {post[0]}
          </Typography>
          
        </Box>
      </FlexBetween>
      { (
        <IconButton
          mr="0.5rem"
          sx={{backgroundColor:"white",marginRight:"1rem"}}
          onClick={() => {
            
          }}
        >
              <PersonAdd sx={{ backgroundColor:"white" }} />
          
        </IconButton>
      ) }
    </FlexBetween>
  )
}

export default CommunityHeader