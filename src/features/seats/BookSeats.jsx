import React, { useState, useEffect ,useContext} from 'react';
import RoutesNav from '../../components/RoutesNav';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrent } from '../movieSlice';
import { FaLocationDot } from "react-icons/fa6";
import Seats from './Seats';
import ActionBtn from '../../components/ActionBtn';
import { seatSelected, selectMovieTicket } from '../ticketSlice';
import SeatContext from '../../SeatContext';
import PriceDetail from './PriceDetail';

export default function BookSeats() {
  const movie = useSelector(selectCurrent);
  const dispatch=useDispatch();
  const {arrangement,setArrangement}=useContext(SeatContext)
  const isMovieSelected=useSelector(selectMovieTicket)
  const [numSeats, setNumSeats] = useState(0);
  const price=(numSeats*movie.vote_average).toPrecision(3);
  useEffect(()=>{
    setNumSeats(arrangement.selected)
  },[arrangement])
  useEffect(()=>{
    window.scrollTo(-1,0)
  },[])
 

  function toggleBooked(index) {
    setArrangement((prev) => ({
        ...prev,
        seating: prev.seating.map((seat, i) =>
            i === index ? (seat === "selected" ? "available" : "selected") : seat
        ),
        selected: prev.selected + (prev.seating[index] === "selected" ? -1 : 1),
    }));
}

function onProceed()
{
  console.log("i ran")
  dispatch(seatSelected({id:movie.id,seats:numSeats,amount:price}))
}

  return (
    <div className='flex flex-col items-center justify-evenly  h-dvh'>
      <RoutesNav title="Choose Seats" navigateTo={`/bookdate`} />
    
     <div className='flex flex-col items-center   w-11/12 max-w-md '> 
     <div className="flex gap-2 items-center tracking-tight ">
        <div className="max-w-full">
          <FaLocationDot className="text-white" />
        </div>
        <div className="flex flex-col text-gray-300 lead
        ing-5 mb-4 text-xs lg:text-base mx-auto">
          <span>Askari IV Cinema # 5</span>
          <span>221B Bakers Street</span>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <svg
          className="w-full text-indigo-600  flex justify-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 190 20"
        >
          <path
            d="M 10 10 Q 95 0 180 10"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
      </div>

      <Seats toggle={toggleBooked}/>
</div>
      <div className="w-full  flex justify-evenly max-w-md   ">
        <PriceDetail price={price} numSeats={numSeats}/>
        <ActionBtn text="Proceed" navigateTo="/payment/card" disabled={numSeats===0} onProceed={onProceed} style={'w-[70%]  py-1 mx-0'}/>
      </div>

    </div>
  );
}
