import Link from "next/link"
import { Button } from "./ui/button"

const Categories = () => {
  return (
    <div>
      <Button variant='ghost' size='lg' >
        <Link href="/produtos?category=laptop">Laptops</Link>
      </Button>
      <Button variant='ghost' size='lg' >
        <Link href="/produtos?category=cadeira">Cadeiras</Link>
      </Button>
    </div>
  )
}

export default Categories