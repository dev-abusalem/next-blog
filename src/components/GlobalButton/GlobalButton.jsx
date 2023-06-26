import Link from 'next/link'
import React from 'react'

const GlobalButton = ({text,url,className}) => {
  return (
    <>
    <div>
        <Link href={url} type="submit" className={` ${className ? className : ""} rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600`}>{text}</Link>
    </div>
    </>
  )
}

export default GlobalButton