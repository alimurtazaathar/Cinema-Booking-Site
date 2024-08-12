import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="mb-4 lg:mb-10">
                <div className="flex  items-center shadow-md p-4 text-gray-400 lg:px-6">
                    <Link to="/" className="mr-auto">
                        <h1 className="text-indigo-600 cursor-pointer font-extrabold md:text-2xl lg:text-3xl">CinemaBooker</h1>
                    </Link>
                    <Link to="/bookings">
                        <span className="text-gray-400 hover:text-indigo-600 cursor-pointer mr-4 lg:mr-7 text-xs md:text-xl ">MyBookings</span>
                    </Link>
                    <Link to="/login">
                        <button className="text-xs md:text-xl ">
                            Login
                        </button>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
