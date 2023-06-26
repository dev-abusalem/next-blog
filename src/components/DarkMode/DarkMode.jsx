"use client"

import React, { useContext } from 'react'
import {BsFillSunFill, BsMoonFill} from "react-icons/bs"
import { ThemeModeContext } from '../../../context/ThemeModeContext'

const DarkMode = () => {

    const {toggle, mode} = useContext(ThemeModeContext)

  return (
    <>
        <div onClick={toggle} className=' cursor-pointer relative border border-gray-200 p-1 rounded-full flex items-center'>
            <BsMoonFill className='text-lg mr-3  text-yellow-500' />
            <BsFillSunFill className='text-lg text-yellow-500 ' />
            <div className='w-[22px] h-[22px] absolute rounded-3xl bg-emerald-500' style={mode === "light" ? {left:"2px"} : {right:"2px"}  }></div>
        </div>
    </>
  )
}

export default DarkMode