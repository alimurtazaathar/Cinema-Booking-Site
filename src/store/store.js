import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import likedReducer from "../features/detail/likedSlice"
import ticketReducer from "../features/ticketSlice"
import authReducer from "../features/auth/authslice"
const store= configureStore({
    reducer:{
        movie:movieReducer,
        auth:authReducer,
        liked:likedReducer,
        ticket:ticketReducer,
    }
})
export default store