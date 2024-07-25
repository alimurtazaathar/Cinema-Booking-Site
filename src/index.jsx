import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route,Link} from "react-router-dom";
import Home,{loader as homeLoader} from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./pages/Login.jsx";
import Bookings from "./pages/Bookings.jsx";
import MovieDetail,{loader as movieDetailLoader} from "./pages/MovieDetail.jsx";
import BookTicket from "./pages/BookTicket.jsx";
const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Nav/>}>
    <Route index element={<Home/>} loader={homeLoader}/>
    <Route path="bookings"element={<Bookings/>}/>
    <Route path="login" element={<Login/>}/>
  </Route>
  <Route path="/:id" element={<MovieDetail/>} loader={movieDetailLoader}/>
  <Route path="/booking" element={<BookTicket/>} />
  
  </>
))

function App()
{
  return <RouterProvider router={router}/>
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);