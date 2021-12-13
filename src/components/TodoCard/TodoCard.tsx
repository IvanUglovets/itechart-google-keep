import React, {FC, useState} from "react";
import {StyledBody, StyledTitle, StyledCard, StyledButton, StyledDate, Flex} from '../UI-components'
import {IPropsTodoCard} from "./IPropsTodoCard";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {deleteTodo, savingText, toggleCompleted} from "../../redux/slices/todoSlice";
import {CardContent, Checkbox, Grid} from "@mui/material";
import {addTodoToBasket} from "../../redux/slices/basketSlice";
import {StyledEditButton} from "./styled-todo-card";
import {Edit} from "@mui/icons-material";
import SaveIcon from '@mui/icons-material/Save';
import InputEdit from "../EditInput/InputEdit";


const TodoCard: FC<IPropsTodoCard> = ({todo}) => {
    const {id, title, body, completed, date} = todo

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [saveTitle,setSaveTitle] = useState<string>(title)
    const dispatch = useStateDispatch()

    const handleDeleteTodo = () => {
        dispatch(addTodoToBasket(todo))
        dispatch(deleteTodo(id))
    }

    const handleChangeCompleted = () => {
        dispatch(toggleCompleted({id, completed: !completed}))
    }

    const editTitle = () => {
         setIsEdit(true)
    }

    const saveTitleChange = () => {
        setIsEdit(false)
        dispatch(savingText({id, text: saveTitle}))
    }

    console.log(todo)

    return (
        <Grid item>
            <StyledCard>
                <CardContent>
                    {isEdit ?
                        <div>
                            <InputEdit saveText={saveTitle} handleSaveChange={setSaveTitle} />
                            <StyledEditButton onClick={saveTitleChange}><SaveIcon /></StyledEditButton>
                        </div>
                        : <StyledTitle decoration={completed ? 'line-through' : 'none'}>
                            {title}
                            {saveTitle && <StyledEditButton size='small' onClick={editTitle}><Edit/></StyledEditButton>}
                        </StyledTitle>
                    }
                    <StyledBody decoration={completed ? 'line-through' : 'none'}>
                        {body}
                    </StyledBody>
                    <StyledDate>
                        {date}
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