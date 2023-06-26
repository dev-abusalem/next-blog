import Link from 'next/link'
import React from 'react'
import ContLayout from '../ContLayout/ContLayout'

const Footer = () => {
  return (
    <footer className=' shadow-sm px-2 py-3 border-t border-gray-200'>
        <ContLayout>
                <div className='text-center text-sm font-semibold'>
                    <p>Copyright 2023 all right resurved</p>
                </div>
        </ContLayout>
        
    </footer>
  )
}

export default Footer