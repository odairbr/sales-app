'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button'

import { books, pokemons } from './components/data'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

export default function Home() {
  const [category, setCategory] = useState('books');
  const categoryToggle = category == 'books' ? 'pokemons' : 'books'

  const changeType = () => { setCategory(categoryToggle); };

  return (
    <div className="text-0xl text-amber-700">
      <NavBar />
      <div className="text-2xl font-bold">
        Categoria atual: {category}
      </div>

      <Button onClick={changeType}> {categoryToggle} </Button>
      {category == 'books'
        ? <ItemListContainer items={books} title={'Livros'} />
        : <ItemListContainer items={pokemons} title={'Pokemons'} />
      }

      <Footer />
    </div>
  )
}
