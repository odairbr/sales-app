'use client'

import Link from "next/link"

export default function Home() {

  return (
    <div className="text-0xl text-amber-700 py-50">
      <div className="container space-x-2 p-2">
        <div className="text-2xl">
          Seja bem vindos, Work in progress: veja a pagina de
          <span className="text-4xl font-bold p-3">
            <Link href='/produtos'>
              Produtos
            </Link>
          </span>
        </div>

      </div>
    </div>
  )
}
