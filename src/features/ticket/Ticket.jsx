import React from 'react'
import ticket from "../../assets/ticket.png"
const Ticket = () => {
  return (
    <div className='h-screen flex items-center justify-center p-3'>

      <div className='relative h-[90%] ' >
        <img src={ticket} alt="ticket image" className='opacity-100 max-w-full max-h-full' />
        <div className='absolute top-0 text-gray-300 w-full p-4'>

            <h1 className='text-lg'>Onward</h1>
            <div className='grid grid-cols-2 gap-4 mt-6'>
              <div className='flex flex-col  text-xs '>
                  <span className='text-gray-400'>Date</span>
                  <span className="   leading-6">22/2/2024</span>
              </div>
              <div className='flex flex-col text-xs'>
                  <span className='text-gray-400'>Time</span>
                  <span className="   leading-6">8:00PM</span>
              </div>
              <div className='flex flex-col text-xs'>
                  <span className='text-gray-400'>Seats</span>
                  <span className="  leading-6 ">D4,D7</span>
              </div>
              <div className='flex flex-col text-xs'>
                  <span className='text-gray-400'>Price</span>
                  <span className="  leading-6">$13.20</span>
              </div>
              <div className='flex flex-col text-xs'>
              <span className='text-gray-400'>Screen</span>
              <span className='  leading-6'>5</span>
            </div>
            </div>
            



        </div>
      </div>
        {/* <h1 className='font-extrabold italic w-1/2 text-gray-300'>I Guess we'll see you at the movies</h1> */}
    </div>
  )
}

export default Ticket