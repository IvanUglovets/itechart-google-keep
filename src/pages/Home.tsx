import React from "react";
import {Container} from "@mui/material";
import CreateTodo from "../components/InputTodo/CreateTodo";
import TodoList from "../components/TodoList/TodoList";
import TotalCompleted from "../components/TotalCompleted/TotalCompleted";


const Home = () => {

    return (
        <Container maxWidth='lg'>
            <CreateTodo/>
            <TotalCompleted/>
            <TodoList/>
        </Container>
    )
}

export default Home