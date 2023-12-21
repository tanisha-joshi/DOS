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
          <Box marginLeft="0.4rem">
            <Typography
              sx={{
                textTransform: "capitalize",
                marginTop: "0.4rem",
                "&:hover": { cursor: "pointer", color: "gray" },
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
      <Divider />

      <Box
        display="flex"
        justifyContent="flex-start"
        gap="1.5rem"
        p="1rem 0 0 1.5rem"
        m={"1rem"}
      >
        <FmdGood />
        <Typography fontSize={"1rem"} variant="h6" color="gray">
         Address : {community.address||"0X123"}
        </Typography>
      </Box>
      </WidgetWrapper>
    </>
  )
}

export default CommunityDeatils