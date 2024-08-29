import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Stars from '../../components/Stars';

const Scroll = ({movies,onLinkClick}) => {
    const [all,setAll]=useState(false);
    const newMovies = movies.map((movie) => (
        
        
        <div key={movie.id}  className={`${!all ? 'w-[40%] md:w-[30%] lg:w-[20%]' : 'w-[48%] lg:w-[24%]'} text-gray-200 relative shadow-md cursor-pointer flex-shrink-0 lg:hover:scale-105 lg:transition-transform duration-300 lg:ease-in-out truncate`}>
            <Link to={`/detail/${movie.id}`} onClick={()=>{onLinkClick(movie)}}>
        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" rounded-xl opacity-60 hover:opacity-70 max-w-full object-contain"/>
        <div className="absolute w-11/12 bottom-1 lg:bottom-2 left-1  truncate">
        <span className={`${!all?'text-xs':'text-base'} lg:text-xl`}>{movie.original_title}</span>
        <div className="flex justify-between items-center mt-[-6px] lg:mt-0">
            <Stars rating={movie.vote_average/10 *5}/>
            <div>
            <span className=" font-bold text-xs lg:text-base self-end text-yellow-500">$ {(movie.vote_average).toPrecision(3)}</span>
            </div>
        </div>
        </div>
        </Link>
    </div>
  
    
    ));
  
    return (
        <>
             <div className="flex  justify-between items-center px-4 lg:px-6">
                <h2 className={`text-2xl lg:text-4xl text-gray-300 ${!all? "self-center ":"mb-4"} `}>
                    New Arrivals
                </h2>
                <button className={`text-xs lg:text-[15px] text-gray-500 lg:cursor-pointer lg:hover:text-indigo-600 ${!all && 'self-end'}`} onClick={()=>{
                    setAll(prev=>!prev); 
                }}>
                    {!all?"SEE ALL":"COLLAPSE"}
                </button>
            </div>
            <div className={!all?"flex p-4 lg:px-6 overflow-x-auto gap-2 lg:gap-6 w-full":"flex justify-between px-4 lg:px-6 flex-wrap gap-2 w-full mb-4"} style={{scrollbarWidth:"none"}}>
                {newMovies}
            </div>
        </>
  )
}

export default Scroll