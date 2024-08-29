import React from 'react'
import { useSelector } from 'react-redux'
import { selectTicketPrice } from '../ticketSlice'
export default function priceDetail ({price,numSeats}){

  
  return (
    <div className="flex flex-col ">
    <span className=" text-yellow-500 text-xl lg:text-2xl tracking-wide">${price}</span>
    <span className="text-gray-600 text-nowrap lg:text-xl">{numSeats} selected</span>
  </div>
  )
}

