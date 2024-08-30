import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userName:""
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loggedIn(state,action){
          state.userName=action.payload;  
        },
        loggedOut(state){
            return initialState;
        }
    }
})
export const {loggedIn,loggedOut}=authSlice.actions;
export const selectUsername=state=>state.auth.userName;
export default authSlice.reducer;