import {Calendar} from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import React,{useEffect, useState} from 'react'
import './calendar.css'
import { dateSelected } from '../ticketSlice'
import { useDispatch,useSelector } from "react-redux";
import { selectTicketDate } from "../ticketSlice";

function findDate(date)
{
  
  const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with 0 if necessary
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed) and pad with 0
  const year = date.getFullYear(); // Get the full year
   return `${day}/${month}/${year}`; 
}

const DateSelector = () => {
    const initialDate=useSelector(selectTicketDate);
    const [value, setValue] = useState(initialDate!= ""?new Date(initialDate.split('/').reverse().join('-')) : new Date());
    console.log(value)
    const dispatch=useDispatch()
    useEffect(()=>{
      const formattedDate=findDate(value);
      dispatch(dateSelected(formattedDate))
      }
      ,[value])

    function handleChange(date)
    {
      const formattedDate=findDate(date);
      setValue(formattedDate)
    }  
    const today = new Date();
    today.setHours(0,0,0,0)
    const maxLimit = new Date(today);
    maxLimit.setMonth(maxLimit.getMonth() + 1);
  
  return (
    <div className=" w-full flex justify-center">
        <Calendar   
        value={value}
        
        onChange={setValue} className={"rounded-lg  font-outfit font-medium text-slate-300 no-underline bg-bodyColor  border-none rounded-tr-lg  shadow-xl lg:text-[18px] leading-3 w-9/12 max-w-md "}
        next2Label={null}
        prev2Label={null}
        maxDetail="month"  
        
        tileDisabled={({ date, view }) => view === 'month' && date < today}
                tileClassName={({ date, view }) =>{
                  
                  return  view === "month" && (date < today || date>maxLimit)
                        ? "!bg-transparent !text-red-500 !cursor-not-allowed !opacity-30"
                        : `${date.getDate()===value.getDate() && '!bg-indigo-600'} !text-gray-300
                          `}
                }    
       
        />
    </div>
  )
}

export default DateSelector