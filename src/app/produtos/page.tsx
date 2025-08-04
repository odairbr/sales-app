'use client'

import Categories from "@/components/Categories";
import useFetchProducts from "@/components/db/products";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Products />
    </Suspense>
  )
}

function Products() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category') as string
  const { products } = useFetchProducts(categoryId as string)

  if (!products[0]) {
    return (
      <div>
        <Categories />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Produtos não encontrados</h2>
            <p className="text-gray-600">O produto que você está procurando não existe.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Categories />
      <div className="bg-white/95 backdrop-blur-sm border-b border-amber-100 top-0 z-50 p-8">
        <main className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="">
              <div className="grid-products">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <Link href={`/produtos/${product.id}`} className="block">
                      <Image
                        src={product.image}
                        alt={product.name}
                        priority={false}
                        width={250}
                        height={250}
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    <div className="text-2xl text-amber-700"> {product.name} </div>
                    <div className="text-2xl text-amber-700"> R$ {product.price} </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};