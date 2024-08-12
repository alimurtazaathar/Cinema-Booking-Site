import { createSlice } from "@reduxjs/toolkit";
const initialState={
    currentMovie:null,
}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        movieClicked(state,action){
            console.log("state changed yo")
            state.currentMovie= action.payload;
        },
    }

})

export const {movieClicked}=movieSlice.actions;
export const selectCurrent=state=>state.movie.currentMovie;
export default movieSlice.reducer;