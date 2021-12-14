import React from "react";

export interface IPropsEdit {
    saveText: string
    handleSaveChange: React.Dispatch<React.SetStateAction<string>>
}