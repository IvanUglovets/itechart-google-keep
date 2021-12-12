import React, {FC} from "react";
import {StyledBody,StyledTitle,StyledCard,StyledButton, StyledDate, Flex} from '../UI-components'
import {IPropsTodoCard} from "./IPropsTodoCard";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {deleteTodo, toggleCompleted} from "../../redux/slices/todoSlice";
import {CardContent, Checkbox, Grid} from "@mui/material";
import {addTodoToBasket} from "../../redux/slices/basketSlice";





const TodoCard: FC<IPropsTodoCard> = ({todo}) => {
    const dispatch = useStateDispatch()
    const {id,title, body, completed,date} = todo

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
                    <StyledDate>
                        {date ?  `Cоздана ${date}` : null}
                    </StyledDate>
                </CardContent>
                <Flex justify='space-between' align='center'>
                    <StyledButton size="small" onClick={handleDeleteTodo}><DeleteOutlineIcon/></StyledButton>
                    <Checkbox checked={completed} onChange={handleChangeCompleted}/>
                </Flex>
            </StyledCard>
        </Grid>
    )
}

export default TodoCard