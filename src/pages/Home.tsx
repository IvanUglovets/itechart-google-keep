import React, {useState} from "react";
import {Container} from "@mui/material";
import CreateTodo from "../components/InputTodo/CreateTodo";
import TodoList from "../components/TodoList/TodoList";



const Home = () => {

    return (
        <Container maxWidth='lg'>
            <CreateTodo />
            <TodoList />
        </Container>
    )
}

export default Home