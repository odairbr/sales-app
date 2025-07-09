import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-0xl text-amber-700">
      <main className="container space-x-2 p-2 text-center">
        <div className="text-2xl font-bold text-amber-700">
          <h2>Pagina inexistente</h2>
          <p>volte para home</p>
          <Button variant='ghost' size='lg'>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}