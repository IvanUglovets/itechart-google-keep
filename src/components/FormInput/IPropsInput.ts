import React from "react";

export interface IPropsInput {
    title: string
    setTitle:  React.Dispatch<React.SetStateAction<string>>
    handleClickInput: ()=>void
    isShowInput: boolean
    handleFocus: () => void
}