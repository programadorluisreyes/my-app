'use-client'
import React from 'react'

const Card = ({ title = "Hola", content = "", cols="3" }) => {
  return (
    <div className={`inline flex-col w-1/${cols} border border-black text-black p-8 justify-between`}>
        <h1 className="font-bold mb-4">{title}</h1>
        <p className="mb-4">{content}</p>
        <button className='self-start'>Explore</button>
    </div>
  )
}

export default Card