import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from "@mui/material";



const Loader = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: "center"}}>
            <CircularProgress/>
        </Box>
    )
}

export default Loader;