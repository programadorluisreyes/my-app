import React, { useState, useEffect } from 'react'
import Toggle from '../general/Toggle'

const ConfiguracionIndex = () => {

    const [configuracion, setConfiguracion] = useState({})
    const handleToggle = (name, e) => {
        
        setConfiguracion({
          ...configuracion,
          [name]: e
        })
      }
useEffect(() => {
    console.log(configuracion)
}, [configuracion])


  return (
    <div className= 'font-sans p-4 flex flex-col w-1/3 bg-blue-50 m-auto rounded-md bg-white shadow shadow-white'>
        <h1 className='text-black font-bold text-2xl mb-4'>Configuración</h1>

        <div className="flex flex-col">
            <div className="flex flex-row gap-2 justify-between">
                <p className="text-gray">Sonido</p>
              <Toggle name="sonido" values={configuracion} handleToggle={handleToggle}/>
            </div>
            <div className="flex flex-row gap-2 justify-between">
                <p className="text-gray">Video</p>
              <Toggle name="video" values={configuracion} handleToggle={handleToggle}/>
            </div>
            <div className="flex flex-row gap-2 justify-between">
                <p className="text-gray">Internet</p>
              <Toggle name="internet" values={configuracion}handleToggle={handleToggle}/>
            </div>
          </div>

        <div className='m-auto rounded-md bg-boton  shadow-white p-2 text-center'>
          <h1 className=''>Deshacer</h1>
        </div>
    </div>
  )
}

export default ConfiguracionIndex