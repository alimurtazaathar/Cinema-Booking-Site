import store from '../store/store'
import { selectCurrent } from './movieSlice'
import { redirect } from 'react-router-dom'
import { selectBookingStatus } from './ticketSlice';

export async function loader()
{
    const state=store.getState();
    const currentMovie=selectCurrent(state);
    console.log(currentMovie)
    const bookingStatus=selectBookingStatus(state);
    console.log(bookingStatus)
    if(Object.keys(currentMovie).length===0 || bookingStatus)
      {
        console.log('oo')
        return redirect('/')
      }
      return null;
}
