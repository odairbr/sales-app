'use client'

import Categories from "@/components/Categories";
import { db } from "@/config/firebase";
import { ProductProps } from "@/shared/interfaces/product";
import { collection, getDocs, query, where } from "firebase/firestore";
import { StepBack, StepForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Products />
    </Suspense>
  )
}

function Products() {
  const [page, setPage] = useState(0)
  const [products, setProducts] = useState<ProductProps[]>([])
  const param_id = 'laptop'

  const productsCollectionRef = collection(db, 'products')
  const q = query(collection(db, "cities"), where("category", "==", param_id));
  const collectionRef = !!param_id ? q : productsCollectionRef
debugger
  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(collectionRef)

        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          description: doc.data().description,
          category: doc.data().category,
          image: doc.data().image,
          quantity: doc.data().quantity,
        }))

        debugger
        setProducts(filteredData)
      } catch (err) {
        console.error(err)
      } finally {
        console.log('produtos buscados')
      }
    }
    getProductList();
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
                  </div>
                ))}
              </div>
              <div className="pagination">
                <button
                  onClick={prevPage}
                  disabled={page === 0}
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
    </div>
  );
};