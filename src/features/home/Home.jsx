import React,{useEffect, useState} from "react";
import {FaStar } from "react-icons/fa";
import { useLoaderData,Link,useLocation, useNavigate } from "react-router-dom";
import Scroll from "./Scroll.jsx";
import Stars from "../../components/Stars.jsx"
import { clearTicket, selectBookingStatus } from "../ticketSlice.js";
import { movieClicked,movieUnclicked } from "../movieSlice.js";
import { useDispatch,useSelector } from "react-redux";

export default function Home() {
    const {result1,result2} = useLoaderData();
    const [all,setAll]=useState(false);
    const navigate=useNavigate()
    const bookingStatus=useSelector(selectBookingStatus)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(bookingStatus){
            dispatch(clearTicket())
            dispatch(movieUnclicked())
        }
        },[])
    function dispatchMovieToStore(movieDetails)
    {
        console.log(movieDetails,"here")
        dispatch(movieClicked(movieDetails))
    }
   
    const legacyMovies= result2.map((movie) => (
        <div key={movie.id} className="w-[48%]
        lg:w-[24%]
        lg:mb-6 text-gray-200 relative shadow-md cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl">
        <Link to={`/detail/${movie.id}`} onClick={()=>{dispatchMovieToStore(movie);
            
            navigate(`/detail/${movie.id}`)
        }}>
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" rounded-xl opacity-60 hover:opacity-70 
        min-w-full object-contain"
        
        />
        
        <div className="absolute w-full px-[5%] bottom-1 lg:bottom-3   truncate">
        <span className="text-base lg:text-xl">{movie.original_title}</span>
        <div className="flex justify-between items-center mt-[-6px] lg:mt-0">
            
            <Stars rating={movie.vote_average/10 *5}/>
            
            <div>
            <span className=" font-bold text-xs lg:text-base self-end text-yellow-500">$ {Math.floor(movie.vote_average)}</span>
            </div>
        </div>
        </div>
    
        </Link>
    </div>
    ));
    return (
        <div>
           <Scroll movies={result1} onLinkClick={dispatchMovieToStore}/>
            <h2 className="text-2xl lg:text-4xl text-gray-300 self-center px-4 lg:px-6 mb-5">10th Anniversary Specials</h2>
            <div className="flex justify-between px-4 lg:px-6 flex-wrap gap-2
            lg:gap-4 w-full">
                {legacyMovies}
            </div>  
        </div>
    );
}