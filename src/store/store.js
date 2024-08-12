import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import likedReducer from "../features/detail/likedSlice"
import ticketReducer from "../features/ticketSlice"
const store= configureStore({
    reducer:{
        movie:movieReducer,
        liked:likedReducer,
        ticket:ticketReducer,
    }
})
export default store