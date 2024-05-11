import React from 'react'

const Container = ({children}) => {
  return (
    <div className='flex flex-col w-full bg-white h-full'>
        {children}
    </div>
  )
}

export default Container