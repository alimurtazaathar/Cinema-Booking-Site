import React from 'react'
import { Link } from 'react-router-dom'
export default function ActionBtn(props){
  return (
    <Link to={props.navigateTo} className={`bg-indigo-600 text-gray-300 border-none rounded ${props.style?props.style:'w-3/4 py-1'}  flex items-center justify-center  cursor-pointer hover:brightness-90 lg:text-3xl text-base lg:tracking-widest lg:mx-auto `} onClick={props.onProceed}>
    <button disabled={props.disabled} >
      {props.text}
    </button>
  </Link>
  )
}

