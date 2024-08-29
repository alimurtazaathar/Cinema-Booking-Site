import React, { useEffect, useState } from 'react';
import { useOutlet, useOutletContext } from 'react-router-dom';

const Wallet = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const {setFormIsValid}=useOutletContext();
  useEffect(()=>{
    if(number && name && pin)
      {
        setFormIsValid(true);
      }
      else{
        setFormIsValid(false);
      }
  },[number,name,pin])

  const handleNumChange = (e) => setNumber(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePinChange = (e) => setPin(e.target.value);

  

  const inputStyle = 'rounded p-3 bg-[rgba(39,40,53,255)] bg-opacity-75 text-gray-400 text-xs placeholder-gray-400 placeholder-opacity-15 w-full';

  return (
    <div className='flex flex-col gap-2 w-full'>

      <label htmlFor='name' className='text-xs text-detailColor'>Account Name</label> 
      <input name="name" id="name" required value={name} type="text" onChange={handleNameChange} placeholder='John Doe' className={inputStyle}/>
      <label htmlFor='number' className='text-xs text-detailColor'>Account Number</label> 
      <input name="number" id="number" required  value={number} onChange={handleNumChange} placeholder='XXXX XXXXXXX' className={inputStyle}/>
      <label htmlFor='pin' className='text-xs text-detailColor'>Pincode</label> 
      <input name="pin" id="pin" required type='password' value={pin} onChange={handlePinChange} placeholder='XXXX' className={inputStyle}/>
    </div>
  );
};

export default Wallet;
