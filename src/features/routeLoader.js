import store from '../store/store'
import { selectCurrent } from './movieSlice'
import { redirect } from 'react-router-dom'
import { selectBookingStatus } from './ticketSlice';
import {requireAuth,checkStates} from "./utils.js"
export async function loader({request})
{
    const url=new URL(request.url);
    requireAuth(url.pathname)
    return checkStates();
}
