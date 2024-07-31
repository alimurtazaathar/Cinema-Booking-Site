import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams,useNavigate } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Seats from "../components/Seats";
import { MovieContext } from "../MovieContext";
import RouteNav from "../components/RouteNav";
export default function BookTicket() {
    //seatBooked is an array of states that tells whether a seat is booked or not

    const location = useLocation()
    console.log(location)
    const [numSeats,setNumSeats]=useState(location.state?.numSeats || 0);
    const [seatBooked,setSeatBooked]=useState(location.state?.seatBooked || new Array(64).fill(false));
    const [probFilled,setProbFilled]=useState(location.state?.seatBooked || new Array(64).fill(false))
    const navigate=useNavigate()
    const {movie}=useContext(MovieContext)
    const price=Math.floor(numSeats*movie.vote_average);
    let status=0;
        
    function updateBooking(status)
    {
        // console.log("update booking",status)
        status?setNumSeats((prev)=>prev+1):setNumSeats((prev)=>prev-1);
    }
    function toggleBooked(index)
    {
        setSeatBooked((prev)=>{
            let newArray=[...prev]
            newArray[index]=!newArray[index];
            updateBooking(newArray[index])
            // console.log(status)
            return newArray;
        })
    }
    useEffect(()=>{
        if(!location.state)
            {
                setProbFilled((prev)=>{
                    const newArray=prev.map((item)=>{
                        return Math.random()>0.5?true:false;
                    })
                    return newArray
                })
            }
    },[])
    return (
        <div className="flex flex-col justify-evenly items-center  relative h-screen ">

            <RouteNav to={`/${movie.id}`} title="Choose Seats"/>

            <div className="w-full flex flex-col items-center justify-center mt-4 max-w-lg ">
                <div className=" flex gap-2 items-center tracking-tight">
                    <div className=" max-w-full">
                        <FaLocationDot className="text-white" />
                    </div>
                    <div className="flex flex-col text-gray-300 leading-5 mb-4">
                        <span>Askari IV Cinema # 5</span>
                        <span>221B Bakers Street</span>
                    </div>
                </div>
                <div className="min-w-full flex justify-center ">
                    <svg className="w-full sm:w-full h-auto text-indigo-600 mb-[3em] flex justify-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 70 190 10">
                        <path d="M 10 80 Q 95 70 180 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="transparent" />
                    </svg>
                </div>
                <div className="grid grid-cols-8 grid-rows-8 w-3/4 h-auto gap-y-4 gap-x-1 items-center p-4">
                    <Seats toggle={toggleBooked} seatBooked={seatBooked} probFilled={probFilled} />
                </div>
                <div className="flex justify-between items-center w-3/4 text-gray-600 mt-3">
                    <div className="flex justify-center  items-center gap-2">
                        <div className="aspect-square border-indigo-600 border-2 bg-transparent rounded h-4 w-4"></div>
                        <span>Available</span>
                    </div>
                    <div className="flex justify-center  items-center gap-2">
                        <RxCross2 className="text-gray-600 border-gray-600 border-2 bg-transparent rounded text-center h-4 w-4" />
                        <span>Booked</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4 border-indigo-600 border-2 bg-indigo-600 rounded "></div>
                        <span>Selected</span>
                    </div>
                </div>
                
            </div >
            <div className="w-full max-w-md flex justify-between gap-2 items-stretch  px-3 ">
                    <div className="flex flex-col">
                        <span className=" text-yellow-500 text-2xl tracking-wide">${price}</span>
                        <span className="text-gray-600 text-nowrap
                        ">{numSeats} seats selected</span>
                    </div>
                    
                        
                        <button className="bg-indigo-600 text-white border-none rounded  flex items-center justify-center py-4 cursor-pointer hover:brightness-90 w-full align-middle " onClick={(e)=>{
                            if(numSeats===0)
                            {
                                e.preventDefault();
                            alert('Please choose atleast one seat')
                            }
                            else{
                                navigate('/bookdate',{state:{seatBooked,probFilled,numSeats}})
                            }
                            }}>
                            Proceed
                        </button>

                </div>

        </div>
    )
}