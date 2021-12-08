import {createSlice} from "@reduxjs/toolkit";

type showInput = {
    isShowInput: boolean
}

const initialState: showInput = {
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