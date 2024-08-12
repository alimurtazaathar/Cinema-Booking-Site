import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import { movieLiked,movieDisliked,selectMovieById } from './likedSlice';
import { useDispatch } from 'react-redux';

export default function LikeBtn({id}){
 
  const [selected,setSelected]=useState(false);
  const dispatch=useDispatch();

  function dispatchToStore(id)
  {
    if(selected)
    {
        setSelected(false)
        dispatch(movieDisliked(id))
    }
    else{
        setSelected(true)
        dispatch(movieLiked(id));
    }
    
}


  return (
    <button className="w-1/4  bg-indigo-300 py-4 rounded  border-none flex justify-center 
    items-center hover:text-indigo-600 cursor-pointer"><FaHeart className="text-xl lg:text-3xl text-gray-500" 
    onClick={()=>{dispatchToStore(id)}}
    /></button>
  )
}
