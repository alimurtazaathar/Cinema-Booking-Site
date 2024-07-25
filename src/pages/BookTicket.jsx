import React from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Seats from "../components/Seats";
export default function BookTicket() {
    //seatBooked is an array of states that tells whether a seat is booked or not

    const location = useLocation()
    const seats=0;
    const bill=0;
    function updateSeatsAndBill()
    {

    }
    return (
        <div className="flex flex-col justify-center items-center h-screen relative">

            <Link to={`/${location.state}`}>
                <div className="fixed top-10 left-7 flex items-center justify-center bg-gray-400
               bg-opacity-30 rounded hover:scale-105 hover:bg-indigo-600 " >
                    <IoIosArrowRoundBack className="text-5xl text-white opacity-80 " />
                </div>
            </Link>

            <div className="w-full flex flex-col items-center justify-center mt-4 max-w-md">
                <h1 className="text-center text-gray-300  text-3xl tracking-widest">Choose Seats</h1>
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
                    <Seats />
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
                <div className="w-full max-w-md flex justify-evenly gap-2 items-stretch px-3 self-end absolute bottom-2">
                    <div className="flex flex-col">
                        <span className=" text-yellow-500 text-2xl tracking-wide">$0</span>
                        <span className="text-gray-600 text-sm
                        ">2 seats selected</span>
                    </div>
                    <Link to="/booking" className="bg-indigo-600 text-white border-none rounded w-3/4 flex items-center justify-center py-4 cursor-pointer hover:brightness-90 align-middle ">

                        <button >
                            Proceed
                        </button>
                    </Link>
                </div>

            </div >

        </div>
    )
}