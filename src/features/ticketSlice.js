import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movieId:"",
    seats:0,
    amount:0.0,
    date:"",
    time:"",
    booked:false,
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
       timeSelected(state,action)
       {
        const time=action.payload;
        state.time=time;
       },
       dateSelected(state,action){
        const date=action.payload;
        state.date=date;
       },
       paymentDone(state){
        state.booked=true;
       },
       clearTicket(state){
        return initialState;
       }
    }

})

 export const {seatSelected,timeSelected,dateSelected,clearTicket,paymentDone}=ticketSlice.actions;
export const selectMovieTicket=state=>state.ticket.movieId;
export const selectTicketPrice=state=>state.ticket.amount;
export const selectTicketTime=state=>state.ticket.time;
export const selectTicketDate=state=>state.ticket.date;
export const selectTicketSeats=state=>state.ticket.seats;
export const selectBookingStatus=state=>state.ticket.booked
export default ticketSlice.reducer;