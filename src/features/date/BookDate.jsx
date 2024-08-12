import React,{useState} from 'react'
import RoutesNav from '../../components/RoutesNav'

export default function BookDate () {
 

  return (
    <div className=''>
      <RoutesNav navigateTo="#" title="Choose Date"/>
      <DateSelector/>
     </div>
  )
}
