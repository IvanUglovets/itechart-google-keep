import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ITodo} from "../../models/interfaces/ITodos";

export const fetchTodos = createAsyncThunk(
    'todos/fetch',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=3')
            const data: ITodo[] = await response.data
            localStorage.setItem('todos',JSON.stringify(data))
            return data
        }catch (e: any) {
            thunkAPI.rejectWithValue(e.message)
        }
    }
)