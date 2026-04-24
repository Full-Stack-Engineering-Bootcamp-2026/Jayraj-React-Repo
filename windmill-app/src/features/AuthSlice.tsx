import type { AuthState, User } from "@/types/auth";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: AuthState ={
    user:null,
    isLoggedIn:false,
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<User>) =>{
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout:(state) =>{
            state.user = null;
            state.isLoggedIn=false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;