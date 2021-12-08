import React, {FC} from "react";
import {StyledTextArea} from "../InputTodo/styled-inputTodo";
import {IPropsTextArea} from "./IPropsTextArea";




const FormTextArea: FC<IPropsTextArea> = ({body,setBody}) => {
    return (
        <StyledTextArea
            name='body'
            value={body}
            placeholder='Введите заметку'
            onChange={(e) => setBody(e.target.value)}
        />
    )
}


export default FormTextArea