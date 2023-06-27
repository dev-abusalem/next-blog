"use client"
import React from 'react'
import ContLayout from '../ContLayout/ContLayout'
import GlobalButton from '../GlobalButton/GlobalButton'
import Image from 'next/image'
import img1 from "../../../public/undraw_Sign_in_re_o58h.png"
import Link from 'next/link'
import useSWR from 'swr'

const PCate = () => {

    
  return (
    <section>
        <ContLayout>
            <div>
                <h1 className='underline font-bold text-3xl'>Our categories</h1>
                <div className='my-8 w-full mx-auto flex flex-wrap gap-4 '>
                    
                    <div className='md:w-[23%] h-[300px] text-white ' 
                        style={{
                            backgroundImage: `url(${img1.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition:"center"
                        }}
                    >
                    <div className='h-[300px] p-10 bg-[#001103d0] hover:bg-[#001103ea] flex items-center duration-200 '>
                        <div>
                        <h1 className='font-bold text-xl'>
                            Web Design
                        </h1>
                            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum.</p>
                            
                        <GlobalButton text="Read More..." url="/portfolio/webdesi" className="my-3 mt-3" />
                        </div>
                    </div>
                        
                    </div>
                    <div className='md:w-[23%] h-[300px] text-white ' 
                        style={{
                            backgroundImage: `url(${img1.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition:"center"
                        }}
                    >
                    <div className='h-[300px] p-10 bg-[#001103d0] hover:bg-[#001103ea] flex items-center duration-200 '>
                        <div>
                        <h1 className='font-bold text-xl'>
                        Web Development
                        </h1>
                            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum.</p>
                            
                        <GlobalButton text="Read More..." url="/portfolio/webdev" className="my-3 mt-3" />
                        </div>
                    </div>
                        
                    </div>
                    <div className='md:w-[23%] h-[300px] text-white ' 
                        style={{
                            backgroundImage: `url(${img1.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition:"center"
                        }}
                    >
                    <div className='h-[300px] p-10 bg-[#001103d0] hover:bg-[#001103ea] flex items-center duration-200 '>
                        <div>
                        <h1 className='font-bold text-xl'>
                        Apps Development
                        </h1>
                            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum.</p>
                            
                        <GlobalButton text="Read More..." url="/portfolio/appsdev" className="my-3 mt-3" />
                        </div>
                    </div>
                        
                    </div>
                    <div className='md:w-[23%] h-[300px] text-white ' 
                        style={{
                            backgroundImage: `url(${img1.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition:"center"
                        }}
                    >
                    <div className='h-[300px] p-10 bg-[#001103d0] hover:bg-[#001103ea] flex items-center duration-200 '>
                        <div>
                        <h1 className='font-bold text-xl'>
                        WordPress
                        </h1>
                            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum.</p>
                            
                        <GlobalButton text="Read More..." url="/portfolio/wordpress" className="my-3 mt-3" />
                        </div>
                    </div>
                        
                    </div>

                    <div className='md:w-[23%] h-[300px] text-white ' 
                        style={{
                            backgroundImage: `url(${img1.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition:"center"
                        }}
                    >
                    <div className='h-[300px] p-10 bg-[#001103d0] hover:bg-[#001103ea] flex items-center duration-200 '>
                        <div>
                        <h1 className='font-bold text-xl'>
                        Graphic Design
                        </h1>
                            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum.</p>
                            
                        <GlobalButton text="Read More..." url="/portfolio/gdesign" className="my-3 mt-3" />
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </ContLayout>
    </section>
  )
}

export default PCate