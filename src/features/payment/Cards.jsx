import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Cards = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const {setFormIsValid}=useOutletContext();
  useEffect(()=>{
    if(name && number&& date && cvv){
      setFormIsValid(true);
    }
    else{
      setFormIsValid(false);
    }
  },[name,number,date,cvv])
  const handleNameChange = (e) => setName(e.target.value);
  const handleNumChange = (e) => setNumber(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);
  
 

  const inputStyle = 'rounded p-3 bg-[rgba(39,40,53,255)] bg-opacity-75 text-gray-400 text-[16px] placeholder-gray-400 placeholder-opacity-15 w-full';

  return (
    <form className='flex flex-col gap-2  w-full'>

      
        <label htmlFor='name' className='text-xs text-detailColor'>Cardholder Name</label>
        <input name="name" id="name" required value={name} type="text" onChange={handleNameChange} placeholder='John Doe' className={inputStyle}/>
        <label htmlFor='number' className='text-xs text-detailColor'>Card Number</label>
        <input name="number" id="number" required type="number" value={number} onChange={handleNumChange} placeholder='XXXX XXXX XXXX XXXX' className={inputStyle}/>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor='date' className='text-xs text-detailColor'>Expiry Date</label>
            <input name="date" id="date" required type="text" value={date} onChange={handleDateChange} placeholder='10 / 24' className={inputStyle}/>
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor='cvv' className='text-xs text-detailColor'>CVV</label>
            <input name="cvv" id="cvv" required type="number" value={cvv} onChange={handleCvvChange} placeholder='0000' className={inputStyle}/>
          </div>
        </div>
     
    </form>
  );
};

export default Cards;
