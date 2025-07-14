import Link from "next/link"
import { Button } from "./ui/button"

const Categories = () => {
  return (
    <div>
      <Button variant='ghost' size='lg' >
        <Link href="/produtos?category=electronics">Eletronicos</Link>
      </Button>
      <Button variant='ghost' size='lg' >
        <Link href="/produtos?category=clothes">Roupas</Link>
      </Button>
      <Button variant='ghost' size='lg' >
        <Link href="/produtos?category=furniture">Moveis</Link>
      </Button>
       <Button variant='ghost' size='lg' >
        <Link href="/produtos?category=shoes">Calçados</Link>
      </Button>
    </div>
  )
}

export default Categories