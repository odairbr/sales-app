'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ProductProps } from "@/shared/interfaces/product";



export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<ProductProps>()

  useEffect(() => {
    async function fetchProduct() {
      const id = params.id
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error(`Erro ao requisistar: ${response.status}`);
        }
        const data = await response.json();
        console.log("Dados recebidos: ", data)

        setProduct(data)
      } catch (error) {
        console.error("Erro ao buscar/criar post: ", error)
      } 
    }
    fetchProduct()
  }, [params.id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Produto não encontrado</h2>
          <p className="text-gray-600">O produto que você está procurando não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-amber-100 top-0 z-50 p-8">
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.images[0]}
                alt={product.title}
                priority={false} 
                width={500}
                height={500}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <div className="text-2xl text-amber-700"> {product.id} </div>
              <div className="text-2xl text-amber-700"> {product.title} </div>
              <div className="text-2xl text-amber-700"> {product.price} </div>
              <div className="text-2xl text-amber-700"> {product.description} </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};