import React, {FC} from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import {Basket, Home, NotFound} from "./pages";
import Header from "./components/Header/Header";


const App: FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}


export default App

