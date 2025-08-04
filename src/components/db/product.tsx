import { db } from "@/config/firebase";
import { ProductProps } from "@/shared/interfaces/product";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface FetchProductProps<ProductProps> {
  product: ProductProps | undefined;
}

const useFetchProduct = (id: string): FetchProductProps<ProductProps> => {
  const [product, setProduct] = useState<ProductProps | undefined>()

  const docRef = doc(db, "products", String(id));
  useEffect(() => {
    async function fetchProduct() {

      try {
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
  }, [id, docRef])

  return { product };
}

export default useFetchProduct