import React from "react";
import {Outlet,Link} from "react-router-dom"

export default function Nav()
{
    return(
        <>
        <nav className="mb-10">
            
            <div className="flex text-base sm:text-xl items-center  px-7 py-5 gap-4 shadow-md">
            <Link to="/" className="mr-auto">
                 <h1 className="text-indigo-600  text-2xl sm:text-4xl  cursor-pointer font-extrabold ">CinemaBooker</h1>
            </Link>
                <Link to="/bookings">
                <span className="text-gray-400 hover:text-indigo-600 cursor-pointer mr-10">MyBookings</span>
                </Link>
                <Link to="/login">
                <button className="border rounded-full p-2 px-6 border-indigo-600 hover:bg-indigo-600 hover:text-black  text-gray-400 cursor-pointer font-medium" >Login</button>

                </Link>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}