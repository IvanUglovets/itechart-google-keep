import React from "react";
import {useStateSelector} from "../../hooks/useStateSelector";
import {Grid} from "@mui/material";
import TodoCard from "../TodoCard/TodoCard";
import {ITodo} from "../../models/interfaces/ITodos";



const TodoList = () => {
    const {todos} = useStateSelector(state => state.todos);
    console.log(todos)
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            justifyContent="flex-start"
            sx={{mt: '2rem'}}
        >
            {todos && todos.map((todo: ITodo) => <TodoCard key={todo.id} todo={todo}/>)}
        </Grid>
    )
}

export default TodoList;