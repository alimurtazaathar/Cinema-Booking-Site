import React, { useState } from 'react'
import { Link,redirect,Outlet,useNavigate } from 'react-router-dom'
import RoutesNav from '../../components/RoutesNav'
import visa from "../../assets/visa.webp"
import masterCard from "../../assets/mastercard.webp"
import jazzCash from "../../assets/jazzcash.webp"
import easyPaisa from "../../assets/easypaisa.webp"

import { selectTicketPrice ,paymentDone} from '../ticketSlice'
import { useDispatch, useSelector } from 'react-redux'
import ActionBtn from '../../components/ActionBtn'
export default function Payment (){
  const [method,setMethod]=useState('card');
  const price=useSelector(selectTicketPrice);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [formIsValid,setFormIsValid]=useState(false);
  function proceed()
  {
    if(formIsValid)
      {
        dispatch(paymentDone());
        navigate('/ticket',{replace:true});
      }
      else{
        alert("Please fill the details.")
      }
  }
  
  return (
    <div className=' flex flex-col justify-evenly  h-screen w-full'>
      {/* max-w-2xl lg:mx-auto */}
    <RoutesNav title={"Payment"} navigateTo={"/bookseats"}/>
    <div className='flex flex-col justify-evenly h-[80%] lg:h-[75%] lg:border lg:rounded-lg lg:border-[rgba(39,40,53,255)] lg:py-1  px-7  lg:mx-auto lg:w-[50%] max-w-md'>
      <h1 className='text-gray-400 self-start  lg:px-auto'>Select your payment method</h1>
      <div className='flex items-center justify-evenly max-w-md '>
      <Link to="card" onClick={()=>{setMethod(prev=>prev==="card"?"wallet":"card")}}>
      <div className={`flex justify-start items-center border rounded border-[rgba(39,40,53,255)] border-opacity-45 p-2 cursor-pointer w-full h-12 ${method==='card' && 'bg-indigo-600'} `}>
          <div className='p-2'><img src={visa} className={`object-contain h-3 ${method==="card"? 'brightness-120':'brightness-150'}`}/></div>
          <div className='p-2'><img src={masterCard} className={`object-contain h-3  ${method==="card" && 'brightness-120'}`}/></div>
      </div>
      </Link>
      
      <Link to="wallet" onClick={()=>{setMethod(prev=>prev==="card"?"wallet":"card")}}>
      <div className={`flex justify-start items-center border rounded border-[rgba(39,40,53,255)] border-opacity-45 p-2 cursor-pointer w-full h-12 ${method==='wallet' && 'bg-indigo-600 '} `}>
          <div className='p-2'><img src={easyPaisa} className={`object-contain w-5  ${method==="wallet" && 'brightness-75'}`}/></div>
          <div className='p-2'><img src={jazzCash} className={`object-contain w-5  ${method==="wallet" && 'brightness-140'}`}/></div>
      </div>
      </Link>
      
      
      </div>
      <h1 className='text-gray-400 self-start  '>Payment Details</h1>
        <Outlet context={{setFormIsValid}}/>
       <div className=''>
         <span className='text-detailColor block'>Total Payment:</span>
         <span className='text-yellow-500 text-2xl'>${price}</span>
       </div>
       
     </div>
    <div className='lg:w-[50%] max-w-md lg:mx-auto px-7 lg:px-0'>
 
    <button  className='w-full bg-indigo-600 text-gray-300 border-none rounded py-2  flex items-center justify-center  cursor-pointer hover:brightness-90 lg:text-2xl text-base lg:tracking-widest lg:mx-auto ' type="submit" onClick={proceed}>
      Confirm Payment
    </button>
 
  
    </div>
    
    </div>
  )
}