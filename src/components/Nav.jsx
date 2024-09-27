import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut, selectUsername } from '../features/auth/authslice';
export default function Nav() {


    const userName=useSelector(selectUsername)
    const location=useLocation();
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const path=location.pathname;

    function handleWhenLogged()
    {
        dispatch(loggedOut());
    }
    function handleWhenNotLogged(){
        navigate('/login');
    }
    return (
        <>
            <nav className="mb-2 lg:mb-4">
                <div className="flex  items-center shadow-md p-4 text-gray-400 lg:px-6">
                    <Link to="/" className="mr-auto">
                        <h1 className="text-indigo-600 cursor-pointer font-extrabold md:text-2xl lg:text-3xl">CinemaBooker</h1>
                    </Link>
                    
                    {path!='/login' &&
                        <button className={`text-[10px] font-medium text-gray-400 lg:text-indigo-600 md:text-xl  ${userName?'px-2 py-2 lg:px-6 lg:py-2  rounded-full text-xs':'px-4 py-1 lg:px-6 lg:py-2  rounded-full text-[10px]'} border-indigo-600  border-2 lg:hover:bg-indigo-600 lg:hover:text-gray-300 lg:transition-transform lg:duration-300 lg:ease-in-out font-outfit shadow-2xl`}
                        onClick={userName?handleWhenLogged:handleWhenNotLogged}
                        >
                            {userName?<FaRegUserCircle  />:"Login"}
                        </button>
                    }
                </div>
            </nav>
            <Outlet />
        </>
    );
}
