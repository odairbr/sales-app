'use client'

import { books, pokemons } from './components/data'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

export default function Home() {

  return (
    <div>
      <NavBar />
      <ItemListContainer items={books} title={'Livros'} />
      <ItemListContainer items={pokemons} title={'Pokemons'}/>
    </div>
  )
}
