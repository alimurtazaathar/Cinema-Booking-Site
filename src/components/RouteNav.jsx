import React from "react"
import {Link} from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";

export default function RouteNav({to,state,title})
{
    return(
        <div className="flex w-full justify-center   px-7 " >
        <Link to={to} state={state} >
              <div className="flex-1 flex items-cenvter justify-center bg-gray-600
             bg-opacity-30 rounded hover:scale-105 hover:bg-indigo-600 " >
                  <IoIosArrowRoundBack className="text-5xl text-white opacity-80 "/>
              </div>
          </Link>
          <h1 className="flex-1 flex justify-center text-gray-300 text-3xl  tracking-widest">{title}</h1>
        
        </div>
    )
}