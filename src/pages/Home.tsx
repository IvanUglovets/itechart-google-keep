import React, {useState} from "react";
import {Container} from "@mui/material";
import CreateTodo from "../components/InputTodo/CreateTodo";



const Home = () => {

    return (
        <Container maxWidth='lg'>
            <CreateTodo />
        </Container>
    )
}

export default Home