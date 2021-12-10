import React, {FC} from "react";
import {StyledBody,StyledTitle,StyledCard,StyledButton, StyledCardActions} from '../UI-components'
import {IPropsTodoCard} from "./IPropsTodoCard";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {deleteTodo, toggleCompleted} from "../../redux/slices/todoSlice";
import {CardContent, Checkbox, Grid} from "@mui/material";
import {addTodoToBasket} from "../../redux/slices/basketSlice";





const TodoCard: FC<IPropsTodoCard> = ({todo}) => {
    const dispatch = useStateDispatch()
    const {id,title, body, completed} = todo

    const handleDeleteTodo = () => {
        dispatch(addTodoToBasket(todo))
        dispatch(deleteTodo(id))
    }


    const handleChangeCompleted = () => {
        dispatch(toggleCompleted({id,completed: !completed}))
    }

    return (
        <Grid item>
            <StyledCard>
                <CardContent>
                    <StyledTitle decoration={completed ? 'line-through' : 'none'}>
                        {title}
                    </StyledTitle>
                    <StyledBody decoration={completed ? 'line-through' : 'none'}>
                        {body}
                    </StyledBody>
                </CardContent>
                <StyledCardActions>
                    <StyledButton size="small" onClick={handleDeleteTodo}><DeleteOutlineIcon/></StyledButton>
                    <Checkbox checked={completed} onChange={handleChangeCompleted}/>
                </StyledCardActions>
            </StyledCard>
        </Grid>
    )
}

export default TodoCard