import React from 'react'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route,Link,Outlet} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./features/home/Home"
import {loader as homeLoader} from "./features/home/homeLoader"
import Detail from './features/detail/Detail';
import {loader as detailLoader} from "./features/detail/detailLoader"
import {loader as routeLoader} from "./features/routeLoader";
import BookSeats from './features/seats/BookSeats';
import BookDate from './features/date/BookDate';
import { SeatProvider } from './SeatContext';
import Ticket from './features/ticket/Ticket';
import Payment from './features/payment/Payment';
import Cards from './features/payment/Cards';
import Wallet from './features/payment/Wallet';
import Login from './features/auth/Login';

function SeatContextLayout()
{
  return(
<SeatProvider>
  <Outlet/>
</SeatProvider>
  )
}



const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Nav/>}>
    <Route index element={<Home/>} loader={homeLoader}/>
    <Route path="login" element={<Login/>}/>
  </Route>
  <Route path="/detail/:id" element={<Detail/>} loader={detailLoader}/>
  <Route element={<SeatContextLayout/>}>
  {/* bookseats bookdate loader removed */}
  <Route path="/bookseats" element={<BookSeats/>} loader={routeLoader}/>
  <Route path="/ticket" element={<Ticket/>}/>
  <Route path="/payment" element={<Payment/>} loader={routeLoader}>
    <Route path="card" element={<Cards/>}/>
    <Route path="wallet" element={<Wallet/>}/>
  </Route>
  
  </Route>
  <Route path="/bookdate" element={<BookDate/>} loader={routeLoader}/>
 
  </>
))



export default function App()
{
  return <RouterProvider router={router}/>
}