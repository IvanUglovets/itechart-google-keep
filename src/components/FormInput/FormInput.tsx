import React, {FC} from 'react'
import {StyledInput} from "../InputTodo/styled-inputTodo";
import {IPropsInput} from "./IPropsInput";





const FormInput: FC<IPropsInput> = ({title,setTitle, handleClickInput,isShowInput,handleFocus}) => {
    return (
        <StyledInput
            onClick={handleClickInput}
            type="text"
            placeholder={isShowInput ? 'Введите заголовок' : 'Заметка...'}
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={handleFocus}
        />
    )
}

export default FormInput;