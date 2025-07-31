'use client'

import dbSeeds from "@/components/db/seeds"
import { Button } from "@/components/ui/button"

export default function CrudPage() {

  const addProducts = () => {
    dbSeeds()
    console.log('productos cadastrados')
  }
  
  return (
    <>
      <Button onClick={(addProducts)} >
        add products
      </Button>
    </>
  )
}