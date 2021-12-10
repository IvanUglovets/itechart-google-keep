import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../models/interfaces/ITodos";

interface IStateBasket{
    basketTodos: ITodo[]
}

const initialState: IStateBasket = {
    basketTodos: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addTodoToBasket: (state:IStateBasket,action:PayloadAction<ITodo>) => {
            state.basketTodos.push(action.payload)
        },
        deleteAllItemsInBasket: (state:IStateBasket) => {
            state.basketTodos = []
        }
    }
})


export const {addTodoToBasket,deleteAllItemsInBasket} = basketSlice.actions
export default basketSlice.reducer
