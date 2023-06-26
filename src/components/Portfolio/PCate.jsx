import React from 'react'
import ContLayout from '../ContLayout/ContLayout'
import GlobalButton from '../GlobalButton/GlobalButton'

const PCate = () => {
  return (
    <section>
        <ContLayout>
            <div>
                <h1 className='underline font-bold text-3xl'>Our categories</h1>
                <div className='w-full mx-auto flex gap-8 items-center justify-between'>
                    <div className='md:w-1/4 '>
                        <h1 className='font-light text-2xl'>Lorem <span className='font-bold text-emerald-600'>ipsum dolor</span>, sit amet consectetur</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum. Odio quis voluptates aspernatur cupiditate, provident officia quidem voluptatibus fugit expedita ipsa? Odit vel ratione sed ducimus. Incidunt, necessitatibus veritatis?</p>
                        
                        <GlobalButton text="Read More..." url="/" className="my-3" />
                        
                    </div>
                    <div className='md:w-1/4 '>
                        <h1 className=' py-3 font-light text-2xl'>Lorem <span className='font-bold text-emerald-600'>ipsum dolor</span>, sit amet consectetur</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum. Odio quis voluptates aspernatur cupiditate, provident officia quidem voluptatibus fugit expedita ipsa? Odit vel ratione sed ducimus. Incidunt, necessitatibus veritatis?</p>
                        
                        <GlobalButton text="Read More..." url="/" className="my-3" />
                        
                    </div>
                    <div className='md:w-1/4 '>
                        <h1 className=' py-3 font-light text-2xl'>Lorem <span className='font-bold text-emerald-600'>ipsum dolor</span>, sit amet consectetur</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum. Odio quis voluptates aspernatur cupiditate, provident officia quidem voluptatibus fugit expedita ipsa? Odit vel ratione sed ducimus. Incidunt, necessitatibus veritatis?</p>
                        
                        <GlobalButton text="Read More..." url="/" className="my-3" />
                        
                    </div>
                    <div className='md:w-1/4 '>
                        <h1 className=' py-3 font-light text-2xl'>Lorem <span className='font-bold text-emerald-600'>ipsum dolor</span>, sit amet consectetur</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum. Odio quis voluptates aspernatur cupiditate, provident officia quidem voluptatibus fugit expedita ipsa? Odit vel ratione sed ducimus. Incidunt, necessitatibus veritatis?</p>
                        
                        <GlobalButton text="Read More..." url="/" className="my-3" />
                        
                    </div>
                    
                </div>
            </div>
        </ContLayout>
    </section>
  )
}

export default PCate