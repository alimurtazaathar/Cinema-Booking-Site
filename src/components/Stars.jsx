import React from 'react'
import {FaStar } from "react-icons/fa";

const Stars = ({rating,detail}) => {
    const stars = new Array(Math.floor(rating)).fill(null).map((item, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))
    return(
    <div className={`flex gap-1  ${detail==="true"? 'text-xs lg:text-xl  lg:gap-2':'text-[8px] lg:text-xs '}`} >
        {stars}
        </div>
    )

    
}

export default Stars