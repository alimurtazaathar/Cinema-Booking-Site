import React,{useEffect, useState} from "react";
import {FaStar } from "react-icons/fa";
import { useLoaderData,Link,useLocation } from "react-router-dom";

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
    const location=useLocation()
   

    function stars(rating)
    {
        console.log(rating)
        const stars = new Array(Math.floor(rating)).fill(null).map((item, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))
        return stars
    }

    const newMovies = result1.map((movie) => (
        <div key={movie.id} className="w-1/5 text-gray-200 relative shadow-md cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out truncate">
        <Link to={`/${movie.id}`}>
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" rounded-xl opacity-60 hover:opacity-90 max-w-full object-cover"/>
        <div className="absolute w-11/12 bottom-3 left-2  truncate">
        <span className=" text-lg">{movie.original_title}</span>
        <div className="flex justify-between items-center">
            <div className="flex gap-1 text-xs">
                {stars(movie.vote_average/10 *5)}
            </div>
            <div>
            <span className=" font-bold text-base self-end text-yellow-500">$ {Math.floor(movie.vote_average)}</span>
            </div>
        </div>
        </div>
        </Link>
    </div>
    ));
    const legacyMovies= result2.map((movie) => (
        <div key={movie.id} className="w-1/5 text-gray-200 relative shadow-md cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out">
        <Link to={`/${movie.id}`}>
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" rounded-md opacity-60 hover:opacity-90 max-w-full object-contain"/>
        <div className="absolute w-11/12 bottom-3 left-2  truncate">
        <span className=" text-lg">{movie.original_title}</span>
        <div className="flex justify-between items-center">
            <div className="flex gap-1 text-xs">
                {stars(movie.vote_average/10 *5)}
            </div>
            <div>
            <span className=" font-bold text-base self-end text-yellow-500">$ {Math.floor(movie.vote_average)}</span>
            </div>
        </div>
        </div>
        </Link>
    </div>
    ));
    return (
        <div>
            <div className="flex  justify-between items-center px-8 ">
                <h2 className={`text-4xl text-gray-300 ${!all && "self-center"} `}>
                    New Arrivals
                </h2>
                {!all && <button className="text-2xl text-gray-500 cursor-pointer hover:text-indigo-600" onClick={()=>{
                    setAll(true); 
                }}>
                    See all
                </button>}
            </div>
            <div className={!all?"flex p-7 overflow-x-auto gap-10 w-full":"flex justify-between p-7 flex-wrap gap-10 w-full"} style={{scrollbarWidth:"none"}}>
                {newMovies}
            </div>
            <h2 className="text-4xl text-gray-300 self-center px-8">10th Anniversary Specials</h2>
            <div className="flex justify-between p-7 flex-wrap gap-10 w-full">
                {legacyMovies}
            </div>  
        </div>
    );
}