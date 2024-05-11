'use client'
import React from 'react'
import Image from 'next/image'

const Card = ({ title, image, weight, abilities }) => {
  return (
    <div className='shadow-sm shadow-white w-full p-2 rounded-md ease transition-duration-200 hover:shadow-md hover:shadow-white'>
        <div className="flex flex-col m-auto">
          <p className="text-white mx-auto">weight: {weight}</p>
          {
              abilities.length > 0 &&
              abilities.map((ability, index) => (
                  <p 
                key={index}
                className="text-white mx-auto">Ability: {ability.ability.name}</p>
                )) 
            }
          <Image src={image} alt="" className="src w-[50%] mx-auto" width={100} height={100} loading='lazy'/>
            <p className="text-white mx-auto font-bold text-xl">{title}</p>
        </div>
    </div>
  )
}

export default Card