import { redirect } from "react-router-dom";
import store from "../store/store";
import { selectCurrent } from "./movieSlice";
import { selectBookingStatus } from "./ticketSlice";
import { selectUsername } from "./auth/authslice";
export function requireAuth(pathname){
    const state=store.getState();
    const userName=selectUsername(state);
    if(!userName){
      throw redirect(`/login?redirectTo=${pathname}`);
    }
}
export function checkStates(){
  const state=store.getState();
  const currentMovie=selectCurrent(state);
  console.log(currentMovie)
  const bookingStatus=selectBookingStatus(state);
  console.log(bookingStatus)
  if(Object.keys(currentMovie).length===0 || bookingStatus)
    {
 
      return redirect('/')
    }
    return null;
}