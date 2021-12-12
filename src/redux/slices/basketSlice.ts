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
        },
        deleteOneCard: (state: IStateBasket,action:PayloadAction<string | number>) => {
            state.basketTodos = state.basketTodos.filter(item => item.id !== action.payload)
        }
    }
})


export const {addTodoToBasket,deleteAllItemsInBasket,deleteOneCard} = basketSlice.actions
export default basketSlice.reducer
