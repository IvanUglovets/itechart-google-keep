import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodos} from "../asyncThunk/fetchTodos";
import {ITodos} from "../../models/interfaces/ITodos";

interface IStateFetch{
    todos: ITodos[],
    isLoading: boolean,
    error: string | null
}




const initialState : IStateFetch = {
    todos: [],
    isLoading: false,
    error: null
}


export const fetchSlice = createSlice({
    name: 'fetchTodos',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchTodos.pending.type] : (state) => {
            state.isLoading = true
        },
        [fetchTodos.fulfilled.type] : (state,action: PayloadAction<ITodos[]>) => {
            state.todos = action.payload
            state.isLoading = false
        },
        [fetchTodos.rejected.type] : (state,action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export default fetchSlice.reducer