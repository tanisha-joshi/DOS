import React, { useEffect } from 'react'
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";
import CommunityHeader from './CommunityHeader';
import {
    Box,
    Typography,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
  import { PersonAdd, FavoriteBorder, Comment, Share,Favorite } from "@mui/icons-material";
const DisplayPost = ({post}) => {
    const isNonMobileScreen = useMediaQuery("(min-width:600px)");
    useEffect(()=>{
       console.log(post)
    },[])
  return (
    <>
     <WidgetWrapper margin="1rem 0" color={"#eeeeee"} border="1px solid black">
            <CommunityHeader post={post} />
            <Box display="flex" justifyContent="center">
              <Box padding="0 2rem">
                <img
                  src={`${post.postPic}`}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    borderRadius: "0.75rem",
                  }}
                  alt=""
                />
                <Typography
                  fontSize="0.75rem"
                  width={isNonMobileScreen ? "90%" : "100%"}
                  pt="0.75rem"
                >
                  {post.description}
                </Typography>
                <FlexBetween>
              <FlexBetween>
                <IconButton className='bg-white' sx={{backgroundColor:"whitesmoke"}}>
                {(false)?<Favorite/>:<FavoriteBorder />}
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