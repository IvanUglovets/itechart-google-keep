import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type searchValue = {
    search: string
}

const initialState: searchValue = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        getSearchValue: (state:searchValue, action:PayloadAction<string>) => {
            state.search = action.payload
        }
    }
})

export const {getSearchValue} = searchSlice.actions
export default searchSlice.reducer