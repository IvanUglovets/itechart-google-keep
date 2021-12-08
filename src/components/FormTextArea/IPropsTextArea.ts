import React from "react";

export interface IPropsTextArea{
    body: string
    setBody:  React.Dispatch<React.SetStateAction<string>>
}