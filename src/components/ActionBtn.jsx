import React from 'react'
import { Link } from 'react-router-dom'
export default function ActionBtn({navigateTo,text,disabled,onProceed}){
  return (
    <Link to={navigateTo} className="bg-indigo-600 text-gray-300 border-none rounded w-3/4  flex items-center justify-center py-1 cursor-pointer hover:brightness-90 lg:text-3xl text-base lg:tracking-widest lg:mx-auto">
    <button disabled={disabled} onClick={onProceed}>
      {text}
    </button>
  </Link>
  )
}

