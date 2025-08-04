import { db } from "@/config/firebase";
import { ProductProps } from "@/shared/interfaces/product";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

interface FetchProductsProps<ProductProps> {
  products: ProductProps[];
}
const useFetchProducts = (categoryId: string): FetchProductsProps<ProductProps> => {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const getProductList = async () => {
      try {
        const productsCollectionRef = collection(db, 'products')
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        const collectionRef = !!categoryId ? q : productsCollectionRef

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
        setProducts(filteredData)
      } catch (err) {
        console.error(err)
      } finally {
        console.log('produtos buscados')
      }
    }
    getProductList();
  }, [categoryId])

  return { products }
}
export default useFetchProducts