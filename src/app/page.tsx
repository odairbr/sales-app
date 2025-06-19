'use client'

import { Button } from "@/components/ui/button"
import { books } from './components/data'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

export default function Home() {
   const items = books

  return (
    <div>
      <NavBar />
      <ItemListContainer items={items} />
    </div>
  )
}
