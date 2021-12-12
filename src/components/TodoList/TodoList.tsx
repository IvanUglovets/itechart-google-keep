import React from "react";
import {useStateSelector} from "../../hooks/useStateSelector";
import {Grid} from "@mui/material";
import TodoCard from "../TodoCard/TodoCard";
import {ITodo} from "../../models/interfaces/ITodos";



const TodoList = () => {
    const {todos} = useStateSelector(state => state.todos);
    const {search} = useStateSelector(state => state.search)
    const filterTodos = todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            justifyContent="flex-start"
            sx={{mt: '1rem'}}
        >
            {filterTodos && filterTodos.map((todo: ITodo) => <TodoCard key={todo.id} todo={todo}/>)}
        </Grid>
    )
}

export default TodoList;