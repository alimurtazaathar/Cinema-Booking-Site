import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
const likedSlice=createSlice({
    name:"liked",
    initialState,
    reducers:{
        movieLiked(state,action){
            state.push(action.payload);
        },
        movieDisliked(state,action){
            const index=state.indexOf(action.payload);
            state.splice(index,1);
        }

    }

})

export const {movieLiked,movieDisliked}=likedSlice.actions;
export const selectMovieById=(state,id)=>state.liked.find(movie=>movie.id===id);
export default likedSlice.reducer;