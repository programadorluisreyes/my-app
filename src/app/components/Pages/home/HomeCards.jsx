'use-client'
import React from 'react'
import Card from './components/Card'

const data = [
    {title:"Home", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut suscipit rem eaque voluptatibus! Sunt voluptatibus magni harum rerum sapiente dolores assumenda blanditiis repudiandae ratione nisi. Iste commodi sint nesciunt!"},
    {title:"Pojects", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut suscipit rem eaque voluptatibus! Sunt voluptatibus magni harum rerum sapiente dolores assumenda blanditiis repudiandae ratione nisi. Iste commodi sint nesciunt!"},
    {title:"About", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut suscipit rem eaque voluptatibus! Sunt voluptatibus magni harum rerum sapiente dolores assumenda blanditiis repudiandae ratione nisi. Iste commodi sint nesciunt!"},
]

const HomeCards = () => {
  return (
    <div className='h-auto w-full flex flex-row justify-center m-12 gap-4'>
        {data.map((e, index) => (
          <Card key={index} title={e.title} content={e.content} cols={data.length}></Card>
        ))}
    </div>
  )
}

export default HomeCards