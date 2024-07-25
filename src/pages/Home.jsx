import React,{useEffect, useState} from "react";

import { useLoaderData,Link,useLocation } from "react-router-dom";

export async function loader()
{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGM2MzFiOWU2NTRlZGQ0MDQ3Nzc0MDg1ZjNkZmNhNyIsIm5iZiI6MTcyMTUwMzQ3My4yNzg4NDIsInN1YiI6IjY2OWEyZTFlYjM2MDgxYzFhODE0NTNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.253zY1ja46Y3Auft-YVt_Q3KUoI9qjbobSdVOiBfoC0'
        }
      };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.results)
        return result.results;
    } catch (error) {
        // console.error(error);
        return null;
    }
}

export default function Home() {
    const data = useLoaderData();
    const [all,setAll]=useState(false);
    const location=useLocation()
   
    const movies = data.map((movie) => (
        <div key={movie.id} className="w-1/5 text-gray-200 relative shadow-md cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out">
        <Link to={`/${movie.id}`}>
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" rounded-md opacity-80 hover:opacity-100 max-w-full object-contain"/>
        <div>
        <span className="absolute w-11/12 bottom-2 left-2 text-lg overflow-hidden text-ellipsis whitespace-nowrap">{movie.original_title}</span>
        </div>
        </Link>
    </div>
    ));
    return (
        <div>
            <div className="flex  justify-between items-center px-8 ">
                <h2 className={`text-4xl text-gray-300 ${!all && "self-center"} `}>
                    Now Showing
                </h2>
                {!all && <button className="text-2xl text-gray-500 cursor-pointer hover:text-indigo-600" onClick={()=>{
                    setAll(true); 
                }}>
                    See all
                </button>}
            </div>
            <div className={!all?"flex p-7 overflow-x-auto gap-10 w-full":"flex justify-center p-7 flex-wrap gap-10 w-full"} style={{scrollbarWidth:"none"}}>
                {movies}
            </div>
        </div>
    );
}