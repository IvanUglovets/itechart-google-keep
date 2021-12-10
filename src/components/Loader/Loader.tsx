import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from "@mui/material";



const Loader = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: "center", mt: '2rem'}}>
            <CircularProgress/>
        </Box>
    )
}

export default Loader;