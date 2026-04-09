import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'grey',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers :{
        change: (state) =>{
            console.log("called")
           state.value =  state.value === 'grey' ? 'black' : 'grey'
        },
        changeColor:(state , action) =>{
            console
            state.value = action.payload;
        },
    },
})

export const { change , changeColor } = themeSlice.actions

export default themeSlice.reducer