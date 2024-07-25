import React from "react";
export default function Login()
{
    return (
        <div className="flex flex-col items-center justify-center w-full h-32 m-auto mt-24">
            <h1 className=" font-extrabold text-indigo-600 mb-10 text-4xl">Log in to your account</h1>
            <div className="font-sans flex flex-col gap-4 w-2/6 p-4 py-10">

            <input placeholder="Email" className="text-black block border-4 rounded-lg border-indigo-600 p-2 bg-bodyColor"></input>
            <input placeholder="Password" className="text-black block border-4 rounded-lg border-indigo-600 p-2 "></input>
            </div>
            <button className="text-black block border-4 rounded-lg border-indigo-600 p-2 ">Log in</button>
        </div>
    )
}