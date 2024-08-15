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
       timeSelected(state,action)
       {
        const time=action.payload;
        state.time=time;
       },
       dateSelected(state,action){
        const date=action.payload;
        state.date=date;
       }
    }

})

 export const {seatSelected,timeSelected,dateSelected}=ticketSlice.actions;
export const selectMovieTicket=state=>state.ticket.movieId;
export const selectTicketPrice=state=>state.ticket.price
export const selectTicketTime=state=>state.ticket.time;
export const selectTicketDate=state=>{
    const date=state.ticket.date;
    const [day, month, year] = date.split('/');
    const serializedDate = new Date(year, month - 1, day, 0, 0, 0, 0);
    return serializedDate;
}
export default ticketSlice.reducer;