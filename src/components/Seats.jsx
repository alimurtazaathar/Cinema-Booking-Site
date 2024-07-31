import React, { useState,useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
export default function Seats({toggle,seatBooked,probFilled})
{
    let status=false;
    const seatsGrid=new Array(64).fill(null).map((_, index) => {
        return (
        <div key={index} className=" aspect-square ">
        <button disabled={probFilled[index]?true:false}
        className={`${probFilled[index]?"border-gray-500 opacity-65":"border-indigo-500 "} border-2 rounded w-full h-full flex justify-center items-center text-[1em]`} onClick={()=>{toggle(index)}} style={{backgroundColor:`${seatBooked[index]?"#6366f1":"transparent"}`}}>{probFilled[index]>0.5 && <RxCross2 className="text-gray-500"/>} 
        </button></div>
      )})
   

   
    return(
        <>
            {seatsGrid}
        </>
    )
}