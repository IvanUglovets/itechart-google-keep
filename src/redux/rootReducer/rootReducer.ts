import {combineReducers} from "@reduxjs/toolkit";
import toggleReducer from '../slices/toggleSlice'
import basketReducer from '../slices/basketSlice'
import searchReducer from '../slices/searchSlice'
import todoReducer from  '../slices/todoSlice'




export const rootReducer = combineReducers({
    todos: todoReducer,
    toggleInput: toggleReducer,
    basket: basketReducer,
    search: searchReducer
})



export type RootState = ReturnType<typeof rootReducer>

