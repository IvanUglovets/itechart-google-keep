import React, {FC, useState} from "react";
import {StyledBody, StyledTitle, StyledCard,  StyledDate, Flex} from '../UI-components'
import {IPropsTodoCard} from "./IPropsTodoCard";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {deleteTodo, savingBody, savingText, toggleCompleted} from "../../redux/slices/todoSlice";
import {CardContent, Checkbox, Grid} from "@mui/material";
import {addTodoToBasket} from "../../redux/slices/basketSlice";
import {StyledEditButton, StyledToBasket} from "./styled-todo-card";
import InputEdit from "../EditInput/InputEdit";
import {Edit, Save} from "./styled-todo-card";



const TodoCard: FC<IPropsTodoCard> = ({todo}) => {
    const {id, title, body, completed, date} = todo

    const [isEditTitle, setIsEditTitle] = useState<boolean>(false)
    const [isEditBody, setIsEditBody] = useState<boolean>(false)
    const [saveTitle, setSaveTitle] = useState<string>(title)
    const [saveBody, setSaveBody] = useState<string>(body)

    const dispatch = useStateDispatch()

    const handleDeleteTodo = (): void => {
        dispatch(addTodoToBasket(todo))
        dispatch(deleteTodo(id))
    }

    const handleChangeCompleted = (): void => {
        dispatch(toggleCompleted({id, completed: !completed}))
    }

    const editTitle = () : void => {
        setIsEditTitle(true)
    }

    const saveTitleChange = () : void => {
        dispatch(savingText({id, text: saveTitle}))
        setIsEditTitle(false)
    }

    const editBody = () : void => {
       setIsEditBody(true)
    }

    const saveBodyChange = () : void => {
        dispatch(savingBody({id, text: saveBody}))
        setIsEditBody(false)
    }

    return (
        <Grid item>
            <StyledCard sx={{overflow: "visible"}}>
                <CardContent>


                    {isEditTitle ?
                        <div>
                            <InputEdit saveText={saveTitle} handleSaveChange={setSaveTitle}/>
                            <StyledEditButton onClick={saveTitleChange}><Save/></StyledEditButton>
                        </div>
                        : <StyledTitle decoration={completed ? 'line-through' : 'none'}>
                            {title}
                            {saveTitle && <StyledEditButton size='small' onClick={editTitle}><Edit/></StyledEditButton>}
                        </StyledTitle>
                    }

                    {isEditBody ?
                        <div>
                            <InputEdit saveText={saveBody} handleSaveChange={setSaveBody}/>
                            <StyledEditButton onClick={saveBodyChange}><Save/></StyledEditButton>
                        </div>
                        :
                        <StyledBody decoration={completed ? 'line-through' : 'none'}>
                            {body}
                            {saveBody &&
                            <StyledEditButton size='small' onClick={editBody}><Edit/></StyledEditButton>}
                        </StyledBody>
                    }

                    <StyledDate>{date}</StyledDate>
                </CardContent>
                <Flex justify='space-between' align='center'>
                    <StyledToBasket
                        size="small"
                        onClick={handleDeleteTodo}
                        disabled={(isEditBody || isEditTitle)}
                    >
                        <DeleteOutlineIcon/>
                    </StyledToBasket>
                    <Checkbox checked={completed} onChange={handleChangeCompleted} disabled={(isEditBody || isEditTitle)}/>
                </Flex>
            </StyledCard>
        </Grid>
    )
}

export default TodoCard