import { Box } from "@mui/material";
import React from "react";
export const UserImage = ({image,size="25px"})=>{
return(
    <Box  width={"35px"} height={"35px"} borderColor={"#eeeeee"}>
        <img 
         width={"40px"}
         height={"35px"}
        style={{
            objectFit:"fit",
            borderRadius:"50%"
        }}
        src={`https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_70ds7qqgfr8b1.png?width=256&s=66774572524b31ccfe245f6f450a625c1f445ece`} alt="" />
    </Box>
)

}

