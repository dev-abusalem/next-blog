import React from 'react'
import ContLayout from '../ContLayout/ContLayout'
import GlobalButton from '../GlobalButton/GlobalButton'
import Image from 'next/image'
import phero from "../../../public/prohero.png"
const PHero = () => {
  return (
    <section>
        <ContLayout>
            <div>
                <div className='md:flex my-16 items-center justify-between'>
                    <div className='md:w-1/2 md:mr-16'>
                        <h1 className=' py-3 font-light text-2xl md:text-6xl'>Lorem <span className='font-bold text-emerald-600'>ipsum dolor</span>, sit amet consectetur</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum. Odio quis voluptates aspernatur cupiditate, provident officia quidem voluptatibus fugit expedita ipsa? Odit vel ratione sed ducimus. Incidunt, necessitatibus veritatis?</p>
                        
                        <GlobalButton text="Read More..." url="/" className="my-3" />
                        
                    </div>
                    <div className='md:w-1/2 phero__img'>
                        <Image width={500} height={500} src={phero} alt='phero' />  
                    </div>
                </div>
            </div>
        </ContLayout>
    </section>
  )
}

export default PHero