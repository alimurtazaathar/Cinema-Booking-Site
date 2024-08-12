import React,{useEffect, useState} from "react";
import {FaStar } from "react-icons/fa";
import { useLoaderData,Link,useLocation } from "react-router-dom";
import Scroll from "./Scroll.jsx";
import Stars from "../../components/Stars.jsx"
import { movieClicked } from "../movieSlice.js";
import { useDispatch,useSelector } from "react-redux";


export async function loader()
{
    const url1 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc';
    const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2014&sort_by=popularity.desc';
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGM2MzFiOWU2NTRlZGQ0MDQ3Nzc0MDg1ZjNkZmNhNyIsIm5iZiI6MTcyMTUwMzQ3My4yNzg4NDIsInN1YiI6IjY2OWEyZTFlYjM2MDgxYzFhODE0NTNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.253zY1ja46Y3Auft-YVt_Q3KUoI9qjbobSdVOiBfoC0'
        }
      };
    try {
            const [response1, response2] = await Promise.all([
              fetch(url1, options),
              fetch(url2, options) // Fixed URL here
            ]);
        
            const result1 = await response1.json();
            const result2 = await response2.json();
        
            return { result1: result1.results, result2: result2.results };
    } catch (error) {
        // console.error(error);
        return null;
    }
}

export default function Home() {
    const {result1,result2} = useLoaderData();
    const [all,setAll]=useState(false);
    const dispatch=useDispatch()

    function dispatchMovieToStore(movieDetails)
    {
        console.log(movieDetails,"here")
        dispatch(movieClicked(movieDetails))
    }
   
    const legacyMovies= result2.map((movie) => (
        <div key={movie.id} className="w-[48%]
        lg:w-[24%]
        lg:mb-6 text-gray-200 relative shadow-md cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out">
        <Link to={`/detail/${movie.id}`} onClick={()=>{dispatchMovieToStore(movie)}}>
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" rounded-xl opacity-60 hover:opacity-90 
        max-w-full object-contain"
        
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