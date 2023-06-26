"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ContLayout from '../ContLayout/ContLayout'
import DarkMode from '../DarkMode/DarkMode'
const Header = () => {

    const menu = [
       
        {
            id:1,
            url:"/",
            title:"Home"
        },
        {
            id:2,
            url:"/about",
            title:"About"
        },
        {
            id:3,
            url:"/portfolio",
            title:"Portfolio"
        },
        {
            id:4,
            url:"/blog",
            title:"Blog"
        },
        {
            id:5,
            url:"/contact",
            title:"Contact"
        }
    ]


const user = false ;

  return (
    <header className=' shadow-sm px-2 py-3 border-b border-gray-200'>
        <ContLayout>
            <div className='md:grid grid-flow-col justify-between items-center gap-3'>
                <div className='md:grid-cols-1' >
                    <Link className='font-bold text-lg' href="/">SM-BLOG</Link>
                </div>
                <nav className='md:grid-cols-1' >
                   <ul className='md:flex gap-1 items-center font-semibold justify-end'>
                    <DarkMode />
                   {menu.map((item)=>{
                        return <li key={item.id}><Link className='px-3 py-2 hover:text-emerald-600 duration-100' href={item.url}>{item.title}</Link></li>
                    })}


                    {
                        user ? <button className='px-3 py-1 bg-red-600 hover:bg-red-700 duration-75 text-white'>Logout</button> :
                        <Link href="/dashboard/login" className='px-3 py-1 bg-emerald-600 hover:bg-emerald-700 duration-75 text-white'>Login</Link>
                    }
                   </ul>
                </nav>
            </div>
        </ContLayout>
        
    </header>
  )
}

export default Header