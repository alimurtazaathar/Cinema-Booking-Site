import React, { useContext, useState } from 'react'
import { useLoaderData,redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrent } from '../movieSlice'
import RoutesNav from '../../components/RoutesNav'
import ActionBtn from '../../components/ActionBtn'
import DateSelector from './DateSelector'
import TimeOptns from './TimeOptns'
import { MovieContext } from '../../../../cinema-site/src/MovieContext'

export default function BookDate() {
  const movie = useSelector(selectCurrent);
  function onProceed()
  {

  }
  
  return (
    <div className='flex flex-col  h-screen justify-evenly items-center'>
      <RoutesNav navigateTo={`/detail/${movie.id}`} title="Choose Date" />
      <div className='flex flex-col items-center '>
        <DateSelector />
      </div>
      <TimeOptns/>
      <ActionBtn text="Next" style={'w-[80%] max-w-md py-2'} navigateTo={"/bookseats"}/>
    </div>
  )
}
