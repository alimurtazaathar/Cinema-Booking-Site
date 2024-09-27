import React from 'react'
import barcode from "../../assets/barcode.webp"
import { useEffect } from 'react'
import ActionBtn from '../../components/ActionBtn'
import { useSelector } from 'react-redux'
import { selectCurrent } from '../movieSlice'
import { selectTicketDate, selectTicketPrice, selectTicketSeats, selectTicketTime } from '../ticketSlice'

const Ticket = () => {
  useEffect(()=>{
    window.scrollTo(-1,0)
  },[])
  const movie=useSelector(selectCurrent);
  const price=useSelector(selectTicketPrice);
  const date=useSelector(selectTicketDate);
  const time=useSelector(selectTicketTime);
  const numSeats=useSelector(selectTicketSeats)
  return (
    <div className='h-dvh flex  flex-col  justify-evenly
  items-center p-3 px-7 lg:px-10 max-w-md mx-auto'>

      <div className="bg-indigo-600 opacity-75  text-gray-300 rounded-lg py-8 flex flex-col justify-evenly gap-4 h-3/4 max-w-md">
      <h2 className="text-center text-3xl font-bold p-4">{movie.original_title}</h2>
      <div className='flex flex-col gap-4 p-4 '>
        <div className="flex justify-between text-xl  gap-4">
          <p ><span className='text-gray-100'>Date:</span> {date}</p>
          <p><span className='text-gray-100'>Time:</span> {time}</p>
        </div>
        <div className="flex justify-between text-xl ">
          <p><span className='text-gray-100'>Seats:</span> {numSeats}</p>
          <p><span className='text-gray-100'>Price:</span> ${price}</p>
        </div>
      </div>
      <p className="text-center mt-2 text-2xl">Screen: 5</p>
      
      <div className='flex flex-col items-center justify-evenly self-end'>
      <div className='w-[95%]  outline-dashed outline-1 opacity-70'></div>
        <img src={barcode} className='w-[70%] bg-white  mt-6 lg:mt-8'/>
      </div>
     
    </div>
    <ActionBtn text="Back to Homepage" style="w-full py-4" navigateTo="/"/>
       
    </div>
  )
}

export default Ticket