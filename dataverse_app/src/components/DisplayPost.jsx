import React, { useEffect, useState } from 'react'
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";
import CommunityHeader from './CommunityHeader';
import {
    Box,
    Typography,
    useMediaQuery,
    IconButton,
    Divider,
  } from "@mui/material";
  import { PersonAdd, FavoriteBorder, Comment, Share,Favorite } from "@mui/icons-material";
  import { loadFile } from '../utils';
const DisplayPost = ({post}) => {
  const [data,setData]= useState("")

    const isNonMobileScreen = useMediaQuery("(min-width:600px)");
    useEffect(()=>{
      async function getData(){
        const res = await loadFile(post)
        console.log("response post",res)
        return res
      }
      getData().then(d=> setData(d.fileContent.content.text)  )     
    },[])
  return (
    <>
     <WidgetWrapper margin="1rem 0" color={"#eeeeee"} border="1px solid black">
            {/* <CommunityHeader post={post} /> */}
            <Divider sx={{ bgcolor: "secondary.light" }}/>
            <Box m={"1rem"} display="flex" justifyContent="center">
              <Box padding="0 2rem">
                {/* <img
                  src={`${post.postPic}`}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    borderRadius: "0.75rem",
                  }}
                  alt=""
                /> */}
                
                <Typography
                  fontSize="0.75rem"
                  width={isNonMobileScreen ? "90%" : "100%"}
                  pt="0.75rem"
                >
                  {data}
                </Typography>
                <FlexBetween>
              <FlexBetween>
                <IconButton  sx={{backgroundColor:"whitesmoke",height:"50%",width:"50%"}} >
                {(false)?<Favorite  />:<FavoriteBorder />}
                </IconButton >
                {post.likes}
              </FlexBetween>
              <Share />
            </FlexBetween>
              </Box>
            </Box>

           
          </WidgetWrapper>
    </>
  )
}

export default DisplayPost