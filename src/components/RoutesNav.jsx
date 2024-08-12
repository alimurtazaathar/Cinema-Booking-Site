import React from "react"
import {Link} from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";

export default function RoutesNav({navigateTo,title,style})
{
    return(
        <div className={`flex w-full justify-center 
        items-center  lg:px-8  relative ${style && "mt-3"}`} >
        <Link to={navigateTo}  >
              <div className="absolute left-[3%] top-0
               aspect-square
              flex  items-center justify-center  bg-gray-600
             bg-opacity-30 rounded hover:scale-105 hover:bg-indigo-600 " >
                  <IoIosArrowRoundBack className="text-3xl lg:text-5xl text-white opacity-80 "/>
              </div>
          </Link>
          <h1 className="flex justify-center text-gray-300 
          lg:text-4xl
          text-2xl  tracking-widest">{title}</h1>
        
        </div>
    )
}