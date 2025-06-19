'use client'

import Image from "next/image";
import Container from "./components/Container"
import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget";
import { Button } from "@/components/ui/button"
import ItemListContainer from './components/ItemListContainer'

export default function Home() {

   const items = [
    { id: 1, title: 'Use and States', amount: 12.23, available: true },
    { id: 2, title: 'Container', amount: 12.23, available: false },
    { id: 3, title: 'Children and Props', amount: 12.23, available: true },
    { id: 4, title: 'Hooks', amount: 12.23, available: true },
    { id: 5, title: 'Aprender React', amount: 12.23, available: true },
  ];

  return (
    <div>
      <NavBar />

      <ItemListContainer items={items} />

    </div>
  )
}
