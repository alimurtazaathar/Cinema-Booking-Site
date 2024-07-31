import React,{useEffect,useContext} from "react";
import {Link, useLocation} from "react-router-dom"

import { MovieContext } from "../MovieContext";
import RouteNav from "../components/RouteNav";
export default function BookDate()
{
    const location=useLocation()
    const {movie}=useContext(MovieContext)
    
    console.log(location,"hi")
    useEffect(()=>{window.scrollTo(0,0)},[])
    return(
    <div className="h-screen"> 
    <div className="w-full h-1/2 " style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(http://image.tmdb.org/t/p/w780/${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',

    }}> 
          <RouteNav to="/bookticket" state={{seatBooked:location.state.seatBooked,probFilled:location.state.probFilled,numSeats:location.state.numSeats}} title="Choose Date"/>
          <div>
            <h2>Select Date</h2>
            <input type=""></input>
          </div>
          </div>
       </div>
    )
}