import React, {FC} from 'react';
import { StyledInputEdit } from './styled-edit-input';
import {IPropsEdit} from "./IEditInput";

const InputEdit: FC<IPropsEdit> = ({saveText, handleSaveChange}) => {
    return (
        <>
            <StyledInputEdit type="text" value={saveText} onChange={(e) => handleSaveChange(e.target.value)}/>
        </>
    );
};

export default InputEdit;