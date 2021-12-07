import {combineReducers} from "@reduxjs/toolkit";
import fetchReducer from "../slices/fetchSlice"

export const rootReducer = combineReducers({
    todos: fetchReducer,
})

export type RootState = ReturnType<typeof rootReducer>