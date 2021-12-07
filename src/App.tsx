import React, {FC, useEffect} from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import {Basket, Home, NotFound} from "./pages";
import Header from "./components/Header/Header";
import {fetchTodos} from "./redux/asyncThunk/fetchTodos";
import {useStateSelector} from "./hooks/useStateSelector";
import {useStateDispatch} from "./hooks/useStateDispatch";
import CircularProgress from '@mui/material/CircularProgress';
import {Box, Typography} from "@mui/material";


const App: FC = () => {
    const dispatch = useStateDispatch()
    const {error, isLoading} = useStateSelector(state => state.todos)


    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    if(error) {
        return <Typography variant='h3' component='h1'>Упс...Произошла ошибка: {error}</Typography>
    }

    return (
        <>
            <Header/>
            {isLoading ?
                <Box sx={{display: 'flex', justifyContent: "center"}}>
                    <CircularProgress/>
                </Box>
                :
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            }
        </>
    )
}


export default App

