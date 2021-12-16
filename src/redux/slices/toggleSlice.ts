import {createSlice} from "@reduxjs/toolkit";

type InputType = {
    isShowInput: boolean
}

const initialState: InputType = {
    isShowInput: false
}


export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        showInput: (state) => {
            state.isShowInput = true
        },
        closeInput: (state) => {
            state.isShowInput = false
        }
    }
})


export const {showInput, closeInput} = toggleSlice.actions
export default toggleSlice.reducer