import React, {FC, useState} from "react";
import {Flex} from '../Header/styled-header'
import {useStateSelector} from "../../hooks/useStateSelector";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {closeInput, showInput} from "../../redux/slices/toggleSlice";
import AddIcon from '@mui/icons-material/Add';
import {nanoid} from "nanoid";
import {ITodo} from "../../models/interfaces/ITodos";
import {addTodo} from "../../redux/slices/fetchSlice";
import {Wrapper, StyledInput, StyledForm, StyledTextArea, SubmitButton} from "./styled-inputTodo";
import FormTextArea from "../FormTextArea/FormTextArea";
import FormInput from "../FormInput/FormInput";


const CreateTodo: FC = () => {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const {isShowInput} = useStateSelector(state => state.toggleInput)
    const dispatch = useStateDispatch()

    const clearInputs = () => {
        setTitle('')
        setBody('')
    }

    const handleClickInput = () => {
        dispatch(showInput())
    }

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const todos = JSON.parse(localStorage.getItem('todos')!)
        const todo: ITodo = {
            id: nanoid(8),
            title,
            body,
            completed: false
        }
        // todos.push(todo)
        dispatch(addTodo(todo))
        // localStorage.clear()
        // localStorage.setItem('todos',JSON.stringify(todos))
        clearInputs()
        dispatch(closeInput())
    }

    return (
        <Wrapper>
            <Flex direction='column' width='100%' justify='center' align='center'>
                <StyledForm onSubmit={formSubmit}>
                    <FormInput
                        isShowInput={isShowInput}
                        handleClickInput={handleClickInput}
                        title={title}
                        setTitle={setTitle}
                    />
                    {isShowInput ?
                        <>
                            <FormTextArea body={body} setBody={setBody}/>
                            <SubmitButton color="primary" aria-label="add" size='small' type='submit' disabled={!title}>
                                <AddIcon/>
                            </SubmitButton>
                        </> :
                        null}
                </StyledForm>
            </Flex>
        </Wrapper>
    )
}


export default CreateTodo;