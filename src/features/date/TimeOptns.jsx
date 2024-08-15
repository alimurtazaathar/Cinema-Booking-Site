import React,{useEffect, useState} from 'react'
import Optn from './Optn'
import { useDispatch ,useSelector} from 'react-redux'
import { timeSelected,selectTicketTime } from '../ticketSlice'
const TimeOptns = () => {

    const initialTime=useSelector(selectTicketTime)
    const [selectedTime,setSelectedTime]=useState(initialTime || "")
    function handleSelection(time)
    {
        setSelectedTime(time);
    }
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(timeSelected(selectedTime))
    },[selectedTime])
    return (
    <div className='grid grid-cols-2 w-[80%] max-w-md text-center gap-4'>
        <Optn time={"1:00 PM"} selected={selectedTime} handleSelection={handleSelection}/>
          <Optn time={"4:00 PM"} selected={selectedTime} handleSelection={handleSelection}/>
          <Optn time={"7:30 PM"} selected={selectedTime} handleSelection={handleSelection}/>
          <Optn time={"11:45 PM"} selected={selectedTime} handleSelection={handleSelection}/>
    </div>
  )
}

export default TimeOptns