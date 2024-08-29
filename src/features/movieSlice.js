import { createSlice } from "@reduxjs/toolkit";
const initialState={
    currentMovie:{},
}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        movieClicked(state,action){
            console.log("state changed yo")
            state.currentMovie= action.payload;
        },
        movieUnclicked(state){
           return initialState;
        }
    }

})

export const {movieClicked,movieUnclicked}=movieSlice.actions;
export const selectCurrent=state=>state.movie.currentMovie;
export default movieSlice.reducer;