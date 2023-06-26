import React from 'react'

const ContLayout = ({children,className}) => {
  return (
    <div className={`lg:w-[1120px] md:w-[750px] md:px-0 lg:px-0 px-3 w-full mx-auto ${className}`}>{children}</div>
  )
}

export default ContLayout