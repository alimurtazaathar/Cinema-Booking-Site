import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { movieLiked, movieDisliked, selectMovieById } from './likedSlice';
import { requireAuth } from '../utils';

export default function LikeBtn({ id, path }) {
  const [selected, setSelected] = useState(false);
  const isLiked = useSelector(state => selectMovieById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    setSelected(isLiked);
  }, [isLiked]);

  function dispatchToStore(id) {
    if (selected) {
      setSelected(false);
      dispatch(movieDisliked(id));
    } else {
      setSelected(true);
      dispatch(movieLiked(id));
    }
  }

  const handleClick = () => {
    console.log('im called');
    try {
        requireAuth(path);
        dispatchToStore(id);
    } catch (error) {
        console.error("Redirecting to login", error);
    }
};


  return (
    <button
      className="w-1/4 bg-indigo-300 py-4 rounded border-none flex justify-center items-center hover:text-indigo-600 cursor-pointer"
      onClick={handleClick}
    >
      <FaHeart className={`text-xl lg:text-3xl ${selected ? 'text-indigo-600' : 'text-gray-500'}`} />
    </button>
  );
}
