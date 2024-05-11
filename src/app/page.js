

import { useState, useEffect } from "react";
import Card from "./components/general/Card";
import NavBar from "./components/layout/NavBar";
import ConfiguracionIndex from "./components/configuracion/ConfiguracionIndex";
import MainIndex from "./components/Pages/home/Index";
import { Menu } from "./tools/RenderMenu";



export default function Home() {

  const [component, setComponent] = useState("HOME");
  /*

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  const getImages = async (pokemonsParam) => {

    const pokemonsParamCopy = [...pokemonsParam]
    let index = 0;
    for await (const pokemon of pokemonsParam) {
      const response = await fetch(pokemon.url)
      const image = await response.json()
      console.log(image)
      //pokemonsParamCopy.image
      pokemonsParamCopy[index]['image'] = image.sprites.front_default
      pokemonsParamCopy[index]['weight'] = image.weight
      pokemonsParamCopy[index]['abilities'] = image.abilities
      index++
    }
    setPokemons(pokemonsParamCopy)
  }

  const getPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        getImages(data.results)
      })
  }

  useEffect(() => {
    getPokemons();
  }, [])
*/

  const handleMenuClick = (option) => {
    setComponent(option)
  }

  return (
    <div className="bg-mainBackground h-screen flex flex-col">
      {/* flex min-h-screen flex-col items-center justify-between p-24 */}
      {/* <div className="flex justify-center flex-col mx-auto w-[50%]">
      {
        pokemons.length > 0 && pokemons.map((element, index) => (

          <Card
            key={index}
            title={element.name}
            image={element.image}
            weight={element.weight}
            abilities={element.abilities}
             />
        )
        )
      }  
      </div> 
      <ConfiguracionIndex></ConfiguracionIndex>
      */}
      <NavBar handleMenuClick={handleMenuClick}></NavBar>
      {Menu.Render(component)}
      {/*<MainIndex></MainIndex>*/}
    </div>
  );
}
