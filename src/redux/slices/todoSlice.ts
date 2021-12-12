import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodos} from "../asyncThunk/fetchTodos";
import {ITodo} from "../../models/interfaces/ITodos";

interface IStateTodo {
    todos: ITodo[]
    isLoading: boolean
    error: string | null

}


const initialState: IStateTodo = {
    todos: [],
    isLoading: false,
    error: null,
}


export const todoSlice = createSlice({
    name: 'fetchTodos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state: IStateTodo, action: PayloadAction<number | string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleCompleted: (state: IStateTodo, action: PayloadAction<any>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].completed = action.payload.completed
        },
    },
    extraReducers: {
        [fetchTodos.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {

            state.todos = action.payload
            state.isLoading = false
        },
        [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {addTodo, deleteTodo, toggleCompleted} = todoSlice.actions
export default todoSlice.reducer