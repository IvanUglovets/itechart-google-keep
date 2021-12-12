import React, {FC} from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import {Basket, Home, NotFound} from "./pages";
import Header from "./components/Header/Header";
import {useStateSelector} from "./hooks/useStateSelector";
import { Typography} from "@mui/material";
import Loader from "./components/Loader/Loader";


const App: FC = () => {
    const {error, isLoading} = useStateSelector(state => state.todos)


    if(error) {
        return <Typography variant='h3' component='h1'>Упс...Произошла ошибка: {error}</Typography>
    }

    return (
        <>
            <Header/>
            {isLoading ?
                <Loader />
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

