import React, { useEffect,useContext } from "react";
import { useLoaderData, Link, useParams } from "react-router-dom";
import { FaPlay, FaHeart, FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import {  MovieDispatcher} from '../MovieContext.jsx';

export async function loader({ params }) {
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGM2MzFiOWU2NTRlZGQ0MDQ3Nzc0MDg1ZjNkZmNhNyIsIm5iZiI6MTcyMTY0MzAwOC45MjAwMDIsInN1YiI6IjY2OWEyZTFlYjM2MDgxYzFhODE0NTNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ex-UjNnmXHQr950S5ZAmz-PcFwkGm5oQseVV_9NY6pI'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
     console.log(result)

    return result;
  } catch (error) {
    return null;
  }
}

function timeInHours(duration) {
  const hours = Math.floor(duration / 60);
  const mins = Math.floor(duration % 60)
  return `${hours} hour ${mins} minutes`
}


export default function MovieDetail() {

  const movie=useLoaderData()
  const params = useParams();
  const rating = Math.floor(movie.vote_average / 10 * 5);
  const {setMovie}=useContext(MovieDispatcher)
  useEffect(()=>{
  },[])
  useEffect(() => { window.scrollTo(-1, 0) 
    setMovie(movie);
  }, [])
  const stars = () => {
    const stars = new Array(rating).fill(null).map((item, index) => (
      <FaStar key={index} className="text-yellow-500" />
    ))
    return stars
  };
 
  const backgroundImage = `url(http://image.tmdb.org/t/p/w780/${movie.backdrop_path})`;


  return (
    <div className="relative h-screen bg-opacity-overlay ">
      <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(http://image.tmdb.org/t/p/w780/${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    }} >
      <div className="flex flex-col w-full content-between ">
          <Link to="..">
                <div className="fixed top-10 left-7 flex items-center justify-center bg-gray-600
               bg-opacity-30 rounded hover:scale-105 hover:bg-indigo-600 " >
                    <IoIosArrowRoundBack className="text-5xl text-white opacity-80 "/>
                </div>
            </Link>
            <a href="#" className="mt-40 w-24 h-24 rounded-full bg-gray-600 bg-opacity-30 flex items-center justify-center hover:scale-105 self-center  hover:bg-indigo-600">
                <FaPlay className="w-1/4 text-white text-6xl opacity-80 "/>
            </a>
          </div>


      <div className="mt-20 pl-[1em] pr-[2em] pb-5 bg-gradient-to-b from-transparent to-bodyColor">
      
        <h2 className="text-slate-100 text-4xl  mb-2">{movie.original_title}</h2>
        <div className="flex w-full justify-between items-center text-yellow-500">
          <div className="flex gap-1 items-center ">{stars()} <span className="ml-1">{rating}/5</span></div>
          <span className=" font-bold text-3xl self-end">${Math.floor(movie.vote_average)}</span>
        </div>
       
      </div>
      
      </div>

      <div className="bg-bodyColor w-full text-detailColor px-[1em]   pt-4 pb-16">

        <h3 className=" text-2xl mb-3 font-medium">Overview</h3>
        <p className="  w-9/12 leading-8 mb-10 opacity-75">{movie.overview}</p>
        <hr className="border-detailColor opacity-35 w-9/12" />
        <h4 className="text-2xl font-medium mt-4 ">Details</h4>
        <div className="flex mt-4 gap-5 ">

          <div className="max-w-full w-1/3 rounded ">
            <img src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} className="rounded min-w-full h-full" />
          </div>
          <div className="flex flex-col  w-full justify-around">
            <p className="">Title: <span className="opacity-75">{movie.original_title}</span></p>
            <p className="">Duration: <span className="opacity-75">{timeInHours(movie.runtime)}</span></p>
            <p className="">Release: <span className="opacity-75">{movie.release_date}</span></p>
            <p className="">Studio: <span className="text-ellipsis whitespace-nowrap opacity-75">{movie.production_companies[0].name
            }</span></p>
          </div>
        </div>
   
      </div>
      <div className="w-full flex justify-center gap-2 items-stretch fixed bottom-1 px-3 max-w-md">
        <button className="w-1/4  bg-indigo-300 py-4 rounded min-h-full border-none flex justify-center hover:text-indigo-600 cursor-pointer"><FaHeart className="text-2xl text-gray-500" /></button>
        <Link to="/bookticket" className="bg-indigo-600 text-white border-none rounded w-3/4 text-center py-4 cursor-pointer hover:brightness-90">
          <button >
            Book Now
          </button>
        </Link>
      </div>

    </div>
  );
}
