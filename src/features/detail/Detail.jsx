import React, { useEffect } from 'react'
import RoutesNav from '../../components/RoutesNav'
import { redirect, useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaPlay,FaHeart } from "react-icons/fa";
import Stars from '../../components/Stars'
import ActionBtn from '../../components/ActionBtn';
import LikeBtn from './LikeBtn';

export default function Detail() {
  const movie = useLoaderData() 
  
  const rating = Math.floor(movie.vote_average / 10 * 5);

  function timeInHours(duration) {
    const hours = Math.floor(duration / 60);
    const mins = Math.floor(duration % 60)
    return `${hours} hour ${mins} minutes`
  }
  useEffect(()=>{
    window.scrollTo(-1,0)
  },[])
  return (
    <div className="h-dvh">
      <div className='flex flex-col justify-between bg-bottom  h-[48vh] lg:h-[70vh]'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',

        }} >
        <RoutesNav navigateTo="/" title="" style="true"/>
        <a href="#" className=" w-12 h-12 
        lg:w-20 lg:h-20
        rounded-full bg-gray-600 bg-opacity-50
       flex items-center justify-center hover:scale-105 self-center  hover:bg-indigo-600 my-auto">
          <FaPlay className="w-1/4 text-white text-3xl opacity-80 " />
        </a>
        <div className=" w-full px-[1em] lg:px-6
        lg:pr-10 bg-gradient-to-b from-transparent to-bodyColor self-end border-none">

          <h2 className="text-slate-100 text-2xl
          lg:text-5xl tracking-wide font-normal lg:mb-2">{movie.original_title}</h2>
          <div className="flex w-full justify-between items-center text-yellow-500">
            <div className="flex gap-1 items-center ">
              <Stars rating={rating} detail="true"/>
              <span className="ml-1 lg:ml-4 text-xs lg:text-xl text-yellow-600">{rating}/5</span></div>
            <span className="font-bold text-base lg:text-3xl self-end">$ {Math.floor(movie.vote_average).toPrecision(3)}</span>
          </div>

        </div>

      </div>
      <div className="bg-bodyColor w-full text-detailColor px-[1em] lg:px-6  pt-4 pb-16 lg:pb-4 n">

        <h3 className=" text-base lg:text-3xl mb-3 font-medium lg:mt-4">Overview</h3>
        <p className=" w-11/12 text-xs lg:text-xl leading-5 mb-6 opacity-75 max-w-xl">{movie.overview}</p>
        <hr className="border-detailColor opacity-15 w-[95%]" />
        <h4 className="text-base lg:text-3xl font-medium mt-4 ">Details</h4>
        <div className="flex mt-4 gap-5 ">

          <div className="max-w-full w-1/3 rounded ">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="rounded min-w-full " />
          </div>
          <div className="flex flex-col  w-full justify-evenly
           text-xs
         lg:text-xl">
            <p className="">Title: <span className="opacity-75 ">{movie.original_title}</span></p>
            <p className="">Duration: <span className="opacity-75 ">{timeInHours(movie.runtime)}</span></p>
            <p className="">Release: <span className="opacity-75 ">{movie.release_date}</span></p>
            <p className="">Studio: <span className="text-ellipsis whitespace-nowrap opacity-75 ">{movie.production_companies[0].name
            }</span></p>
            <p>Language:  <span className="opacity-75 ">{movie.spoken_languages[0].english_name}</span></p>
          </div>
        </div>

      </div>
      <div className="w-full flex  gap-2  fixed lg:static  bottom-1 px-4 lg:px-6 lg:pb-3">
       <LikeBtn/>
        <ActionBtn navigateTo="/bookdate" text="Book Now"/>
      </div>
            
          
    </div>
  )
}

