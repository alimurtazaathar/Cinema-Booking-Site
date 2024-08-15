import {Calendar} from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import React,{useEffect, useState} from 'react'
import './calendar.css'
import { dateSelected } from '../ticketSlice'
import { useDispatch,useSelector } from "react-redux";
import { selectTicketDate } from "../ticketSlice";
const DateSelector = () => {
    const initialDate=useSelector(selectTicketDate);
    const [value,setValue]=useState(initialDate || new Date())
    const dispatch=useDispatch()
    useEffect(()=>{
      if(initialDate)
      {
        const day = String(value.getDate()).padStart(2, '0');
      const month = String(value.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const year = value.getFullYear(); // Full year
      const formattedDate = `${day}/${month}/${year}`;
      dispatch(dateSelected(formattedDate))
    
      }
      },[value])
    const today = new Date();
    today.setHours(0,0,0,0)
    const maxLimit = new Date(today);
    maxLimit.setMonth(maxLimit.getMonth() + 1);
  
  return (
    <div className=" w-full flex justify-center">
        <Calendar defaultValue={new Date()}  
        value={value}

        onChange={setValue} className={"rounded-lg  font-outfit font-medium text-slate-300 no-underline bg-bodyColor  border-none rounded-tr-lg  shadow-xl lg:text-[18px] leading-3 w-9/12 max-w-md "}
        next2Label={null}
        prev2Label={null}
        maxDetail="month"  
        
        tileDisabled={({ date, view }) => view === 'month' && date < today}
                tileClassName={({ date, view }) =>
                    view === "month" && (date < today || date>maxLimit)
                        ? "!bg-transparent !text-red-500 !cursor-not-allowed !opacity-30"
                        : `${date===value && '!bg-indigo-500'} !text-gray-300
                          `
                }    
       
        />
    </div>
  )
}

export default DateSelector