'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button'

import { books, pokemons } from './components/data'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

export default function Home() {
  const [category, setCategory] = useState('books');
  const categoryToggle = category == 'books' ? 'pokemons' : 'books'

  const changeType = () => {

    setCategory(categoryToggle);
  };

  //const decrement = () => {
  //  setCategory(prev => Math.max(0, prev - 1));
  //};


  return (
    <div>
      <NavBar />
      <div className="text-2xl font-bold">
        Categoria atual: {categoryToggle}
      </div>

      <Button onClick={changeType}> {category} </Button>
      {categoryToggle == 'books'
        ? <ItemListContainer items={books} title={'Livros'} />
        : <ItemListContainer items={pokemons} title={'Pokemons'} />
      }

    </div>
  )
}
