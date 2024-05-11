'use-client'
import React from 'react'
import { Transition } from '@tailwindui/react';
import Background from '../../../../../public/assets/R.jpeg'
import Image from 'next/image';

const HomeDescription = () => {
  return (
    <Transition
    show={true}
    enter="transition-opacity duration-250"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"

    >

    <div className='bg-black h-full w-full flex flex-row'>
        <div className='flex w-1/2 h-full p-12 flex-col'>
           <h1 className='text-xl mb-4'>Software developer</h1>
           <h1 className='text-4xl mb-4'>Luis Reyes</h1>
           <h1 className='text-md mb-4'>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut suscipit rem eaque voluptatibus! Sunt voluptatibus magni harum rerum sapiente dolores assumenda blanditiis repudiandae ratione nisi. Iste commodi sint nesciunt!"}</h1>
           <button className='bg-boton self-start p-2 text-sm'>Start learning</button>
        </div>
        <div className='flex w-1/2 h-full'>
          <Image className="w-full h-full object-cover" src={Background}></Image>
        </div>
    </div>
    </Transition>
  )
}

export default HomeDescription