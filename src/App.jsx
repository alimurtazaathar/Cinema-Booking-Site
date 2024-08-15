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
  </Route>
  <Route path="/detail/:id" element={<Detail/>} loader={detailLoader}/>
  <Route element={<SeatContextLayout/>}>
  <Route path="/bookseats" element={<BookSeats/>} loader={routeLoader}/>
  
 
  </Route>
  <Route path="/bookdate" element={<BookDate/>}/>
  <Route path="/ticket" element={<Ticket/>}/>

  </>
))



export default function App()
{
  return <RouterProvider router={router}/>
}