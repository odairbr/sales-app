'use client'

import { ProductProps } from "@/shared/interfaces/product";
import { StepBack, StepForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [page, setPage] = useState(0)
  const [products, setProducts] = useState<ProductProps[]>([])
  useEffect(() => {
    async function fetchProduct() {
      const limit = 4
      const offset = limit * page
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
          throw new Error(`Erro ao requisistar: ${response.status}`);
        }
        const data = await response.json();
        console.log("Dados recebidos: ", data)

        setProducts(data)
      } catch (error) {
        console.error("Erro ao buscar/criar post: ", error)
      }
    }
    fetchProduct()
  }, [page])

  // Paginação
  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }
  return (

    <div className="bg-white/95 backdrop-blur-sm border-b border-amber-100 top-0 z-50 p-8">
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="">
            <div className="grid-products">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <Link href={`/produtos/${product.id}`} className="block">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      priority={false}
                      width={250}
                      height={250}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <div className="text-2xl text-amber-700"> {product.title} </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className="page-button"
              >
                <StepBack className="h-4 w-4 mr-2" />
              </button>
              <span className="page-number">{page}</span>
              <button
                onClick={nextPage}
                className="page-button"
              >
                <StepForward className="h-4 w-4 mr-2" />

              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};