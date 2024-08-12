import React,{createContext,useState} from 'react'

const SeatContext=createContext();

export function SeatProvider({children}){
  
  const [arrangement,setArrangement]=useState({seating:new Array(56).fill(null).map(()=>Math.random()>0.5?"available":"unavailable"),selected:0})
  // console.log(arrangement)
    return (
    <SeatContext.Provider value={{arrangement,setArrangement}}>
      {children}
    </SeatContext.Provider>
  )
}
export default SeatContext

