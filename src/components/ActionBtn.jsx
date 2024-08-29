import React from 'react'
import { Link } from 'react-router-dom'
export default function ActionBtn(props){
  return (
    <Link to={props.navigateTo} className={`bg-indigo-600 text-gray-300 border-none rounded ${props.style?props.style:'w-3/4 py-1'}  flex items-center justify-center  cursor-pointer hover:brightness-90 lg:text-2xl text-base lg:tracking-widest  `} onClick={props.onProceed}>
    <button disabled={props.disabled} className='w-full' type={props.type==="submit"?"submit":"button"} >
      {props.text}
    </button>
  </Link>
  )
}

