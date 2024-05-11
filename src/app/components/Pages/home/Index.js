'use-client'
import React from 'react'
import HomeCards from './HomeCards'
import Container from '../../layout/Container'
import HomeDescription from './HomeDescription'

const MainIndex = () => {
  return (
    <Container>
        <div className='flex h-1/2'>
          <HomeDescription/>
        </div>
        <div className='flex h-1/2'>
          <HomeCards/>
        </div>
    </Container>
    
  )
}

export default MainIndex