import React ,{useContext}from 'react';
import { RxCross2 } from "react-icons/rx";
import SeatContext from '../../SeatContext';
import { seatSelected } from '../ticketSlice';
import { useDispatch } from 'react-redux';
import { MovieContext } from '../../../../cinema-site/src/MovieContext';

export default function Seats({ toggle,price}) {

    const {arrangement}=useContext(SeatContext);
    const dispatch=useDispatch();
    const row=7;
    const cols=8;

    function handleClick(row,col,index)
    {
        toggle(index)
    }

    const seatsGrid=new Array(56).fill(null).map((_, index) => {
        const currRow=Math.floor(index/cols);
        const currCol=index%cols;

        return (
        <div key={index} className=" aspect-square ">
        <button disabled={arrangement.seating[index]==="unavailable"?true:false}
        className={`${arrangement.seating[index]==="unavailable"?"border-gray-500 opacity-65":"border-indigo-500 "} border-2 rounded w-full h-full flex justify-center items-center text-[1em]`} onClick={()=>{handleClick(currRow,currCol,index)}} style={{backgroundColor:`${arrangement.seating[index]==="selected"?"#6366f1":"transparent"}`}}>{arrangement.seating[index]==="unavailable" && <RxCross2 className="text-gray-500"/>} 
        </button></div>
      )})
   

   
    return(
        <>
        <div className="grid grid-cols-8 grid-rows-7 w-3/4 max-w-md h-auto gap-y-4 gap-x-1 items-center p-4 opacity-50">
            {seatsGrid}
        </div>
        <div className="flex justify-between items-center w-full text-gray-600 mt-1  text-xs lg:text-base opacity-50">
                    <div className="flex justify-center  items-center gap-1">
                        <div className="aspect-square border-indigo-600 border-2 bg-transparent rounded h-4 w-4 lg:h-5 lg:w-5"></div>
                        <span>Available</span>
                    </div>
                    <div className="flex justify-center  items-center gap-1">
                        <RxCross2 className="text-gray-600 border-gray-600 border-2 bg-transparent rounded text-center h-4 w-4  lg:h-5 lg:w-5" />
                        <span>Booked</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="h-4 w-4  lg:h-5 lg:w-5 border-indigo-600 border-2 bg-indigo-600 rounded "></div>
                        <span>Selected</span>
                    </div>
                </div>
        </>
    )
}
