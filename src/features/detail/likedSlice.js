import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        movieLiked(state, action) {
            const existingMovie = state.find(movie => movie.id === action.payload.id);
            if (!existingMovie) {
                state.push(action.payload);
            }
        },
        movieDisliked(state, action) {
            return state.filter(movie => movie.id !== action.payload.id); 
        }
    }
});

export const { movieLiked, movieDisliked } = likedSlice.actions;

export const selectMovieById = (state, id) => state.liked.find(movie => movie.id === id);

export default likedSlice.reducer;
