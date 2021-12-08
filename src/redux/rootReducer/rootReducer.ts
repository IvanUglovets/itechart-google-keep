import {combineReducers} from "@reduxjs/toolkit";
import fetchReducer from "../slices/fetchSlice"
import toggleReducer from '../slices/toggleSlice'

export const rootReducer = combineReducers({
    todos: fetchReducer,
    toggleInput: toggleReducer,
})

export type RootState = ReturnType<typeof rootReducer>