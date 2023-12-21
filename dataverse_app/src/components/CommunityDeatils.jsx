import React from 'react'
import WidgetWrapper from './WidgetWrapper';
import FlexBetween from './FlexBetween';
import { UserImage } from './UserImage';
import { Box,Typography,Divider,} from '@mui/material';
import { Person2,FmdGood } from '@mui/icons-material';
const CommunityDeatils = ({community}) => {
  return (
    <>
     <WidgetWrapper  marginTop="3rem" border="1px solid black">
      {/* First Row */}
      <FlexBetween pb={"1.1rem"}>
        <FlexBetween gap={"0.5rem"} padding={"1rem 0 0 1rem"}>
          <UserImage  />
          <Box marginLeft="0.4rem" color={"whitesmoke"}>
            <Typography
              sx={{
                textTransform: "capitalize",
                marginTop: "0.4rem",
                "&:hover": { cursor: "pointer", color: "grey" },
              }}
              onClick={() => {
                navigate(`/profile/${user._id}`);
              }}
            >
              {community.communityName||"Shitx"}
            </Typography>
            <p style={{ marginTop: "0rem", fontSize: "0.8rem", color: "grey" }}>
              {community.members||"35"} Members
            </p>
          </Box>
        </FlexBetween>
        <Person2 sx={{ marginRight: "1rem" }}></Person2>
      </FlexBetween>
      <Divider sx={{ bgcolor: "whitesmoke" }} />

      <Box
        display="flex"
        justifyContent="flex-start"
        gap="1.5rem"
        p="1rem 0 0 0"
        m={"1rem 1rem 2rem 1rem"}
      >
       
        <Typography fontSize={"0.84rem"} display={"flex"} variant="h6" color="whitesmoke">
        <p style={{color:"grey"}}>Address </p>  : {community.address||"0X123"}
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "whitesmoke" }} />
      <Box
      
        textAlign="start"
        gap="1.5rem"
        p="1rem 0 0 0"
       m={"1rem 1rem"}
       mb={"3rem"}
      >
       
        <Typography gap="0.5rem" display={"flex"} fontSize={"0.84rem"} variant="h6" color="whitesmoke">
         <p style={{color:"grey"}}>Description </p>: {community.description||"For anything funny related to programming and software development"}
        </Typography>
      </Box>
      
      </WidgetWrapper>
    </>
  )
}

export default CommunityDeatils