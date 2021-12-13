import React, {FC} from 'react';

interface IPropsEdit {
    saveText: string
    handleSaveChange: React.Dispatch<React.SetStateAction<string>> | any
}

const InputEdit: FC<IPropsEdit> = ({saveText, handleSaveChange}) => {
    return (
        <>
            <input type="text" value={saveText} onChange={(e) => handleSaveChange(e.target.value)}/>
        </>
    );
};

export default InputEdit;