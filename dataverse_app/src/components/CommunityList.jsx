import React from 'react'
import {Box,Typography} from "@mui/material"
import CommunityHeader from "./CommunityHeader"
import WidgetWrapper from "./WidgetWrapper"


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

const CommunityList = () => {
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
              comunityLists.map((post)=>{
                
                    
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