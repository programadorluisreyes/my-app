'use client'
import React from 'react'

const NavBar = ({ handleMenuClick }) => {
  return (
    <div className='h-10 bg-white w-full justify-between flex flex-row px-8'>
      <div className="flex flex-row w-1/2 text-black my-auto">
        <p className='font-medium'>Luis Reyes</p>
      </div>
      <div className="flex flex-row w-1/2 justify-end text-black gap-6 my-auto">
        <a className='buttonNav transition transform duration 1000'  href="#" onClick={()=>handleMenuClick("HOME")}>Home</a>
        <a className='buttonNav transition transform duration 1000 ' href="#" onClick={()=>handleMenuClick("PROJECTS")}>Projects</a>
        <a className='buttonNav transition transform duration 1000 ' href="#" onClick={()=>handleMenuClick("ABOUT")}>About</a>
        <a className='buttonNav transition transform duration 1000 'href="#"  onClick={()=>handleMenuClick("CONTACT")}>Contact</a>
      </div>
    </div>
  )
}

export default NavBar