import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodos} from "../asyncThunk/fetchTodos";
import {ITodo} from "../../models/interfaces/ITodos";

interface IStateFetch{
    todos: ITodo[],
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
        addTodo: (state, action:PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state,action:PayloadAction<number | string>) => {
          state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleCompleted: (state, action:PayloadAction<any>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].completed = action.payload.completed
        },
        searchTodo: (state,action:PayloadAction<string>) => {
            const newArr = state.todos.filter(todo => todo.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.todos = newArr
        }
    },
    extraReducers: {
        [fetchTodos.pending.type] : (state) => {
            state.isLoading = true
        },
        [fetchTodos.fulfilled.type] : (state,action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload
            state.isLoading = false
        },
        [fetchTodos.rejected.type] : (state,action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {addTodo,deleteTodo,toggleCompleted, searchTodo} = fetchSlice.actions
export default fetchSlice.reducer