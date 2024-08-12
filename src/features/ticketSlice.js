import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movieId:"",
    seats:0,
    amount:0.0,
    date:"",
    time:"",
}
const ticketSlice=createSlice({
    name:"ticket",
    initialState,
    reducers:{
       seatSelected(state,action){
            const {id,seats,amount}=action.payload;
            state.movieId=id;
            state.amount=amount;
            state.seats=seats;
       },
    }

})

 export const {seatSelected}=ticketSlice.actions;
export const selectMovieTicket=state=>state.ticket.movieId;
export const selectTicketPrice=state=>state.ticket.price
export default ticketSlice.reducer;