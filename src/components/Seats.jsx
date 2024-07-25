import React, { useState,useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
export default function Seats(props)
{
    const [seatBooked,setSeatBooked]=useState(new Array(64).fill(false));
    const [probFilled,setProbFilled]=useState(new Array(64).fill(false))
    // console.log(seatBooked)
    const seatsGrid=new Array(64).fill(null).map((_, index) => {
        return (
        <div key={index} className=" aspect-square ">
        <button disabled={probFilled[index]?true:false}
        className={`${probFilled[index]?"border-gray-500 opacity-65":"border-indigo-500 "} border-2 rounded w-full h-full flex justify-center items-center text-[1em]`} onClick={()=>{toggleBooked(index)}} style={{backgroundColor:`${seatBooked[index]?"#6366f1":"transparent"}`}}>{probFilled[index]>0.5 && <RxCross2 className="text-gray-500"/>} 
        </button></div>
      )})
    useEffect(()=>{
        setProbFilled((prev)=>{
            const newArray=prev.map((item)=>{
                return Math.random()>0.5?true:false;
            })
            return newArray
        })
    },[])
    function toggleBooked(index)
    {
        // console.log("im here")
        setSeatBooked((prev)=>{
            const newArray=[...prev]
            newArray[index]=!newArray[index];
            return newArray;
        })
    }

    return(
        <>
            {seatsGrid}
        </>
    )
}