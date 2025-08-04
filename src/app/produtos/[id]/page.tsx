'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ProductProps } from "@/shared/interfaces/product";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/cart";
import { Button } from "@/components/ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Item from "@/components/Item";
import ItemListContainer from "@/components/ItemListContainer";



export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<ProductProps>()
  const { addToCart, removeFromCart, cart } = useCart()

  useEffect(() => {
    async function fetchProduct() {
      const id = params.id
      try {
        const docRef = doc(db, "products", String(id));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setProduct({
            id: docSnap.id,
            name: docSnap.data().name,
            price: docSnap.data().price,
            description: docSnap.data().description,
            category: docSnap.data().category,
            image: docSnap.data().image,
            quantity: docSnap.data().quantity,
          })
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
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
                src={product.image}
                alt={product.name}
                priority={false}
                width={500}
                height={500}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <div className="text-2xl text-amber-700">
                <Label className="text-amber-500">
                  Id:
                </Label>
                {product.id}
              </div>
              <div className="text-2xl text-amber-700">
                <Label className="text-amber-500">
                  Nome:
                </Label>
                {product.name}
              </div>
              <div className="text-2xl text-amber-700">
                <Label className="text-amber-500">
                  Preço:
                </Label>
                {product.price}
              </div>
              <div className="text-2xl text-amber-700">
                <Label className="text-amber-500">
                  Descrição:
                </Label>
                {product.description}
              </div>
              <div>
                <span className="px-1">
                  <Button onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                  })}
                  >
                    <PlusCircleIcon />
                  </Button>
                </span>

                <span className="px-1">
                  <Button onClick={() => removeFromCart(product.id)}>
                    <MinusCircleIcon />
                  </Button>
                </span>
              </div>
              <ItemListContainer items={cart} title={'Carrinho'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};