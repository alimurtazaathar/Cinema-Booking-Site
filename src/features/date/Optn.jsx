import React from 'react'

const Optn = ({time,selected,handleSelection}) => {
    return (
        <div className={` rounded border-detailColor border-opacity-45 p-2 cursor-pointer ${selected===time?'bg-indigo-600 text-gray-300 border-none flex justify-center items-center':'text-detailColor border-2 hover:bg-indigo-600 hover:text-gray-300 hover:border-indigo-600'}`} onClick={()=>{handleSelection(time)}}>
            <label htmlFor='optn1' >{time}</label>
            <input type="radio" id="optn-1" className='hidden
          ' value={time}/>
        </div>
    )
}

export default Optn