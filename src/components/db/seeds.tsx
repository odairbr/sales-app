import { db } from "@/config/firebase"
import { collection, doc, setDoc } from "firebase/firestore"

async function dbSeeds() {
  const productsRef = collection(db, 'products')

  await setDoc(doc(productsRef), {
    category: "laptop",
    description: "I5 10 geração 14'",
    image: "https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4",
    name: "Latitude-3410",
    price: 5200.01,
    quantity: 10
  });
  await setDoc(doc(productsRef), {
    category: "laptop",
    description: "I5 12 geração 15'",
    image: "https://images.unsplash.com/photo-1540141114760-f7c34f15d33c",
    name: "Vostro 3510",
    price: 7432.21,
    quantity: 1
  });
  await setDoc(doc(productsRef), {
    category: "laptop",
    description: "MacBook Pro Apple 14\"",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
    name: "MacBook Pro Apple",
    price: 15200.01,
    quantity: 2
  });

  await setDoc(doc(productsRef), {
    category: "cadeira",
    description: "Cadeira de recepção em couro",
    image: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee",
    name: "Cadeira de recepção",
    price: 200.01,
    quantity: 2
  });
  await setDoc(doc(productsRef), {
    category: "cadeira",
    description: "em madeira decorada em relevo, para jardim",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237",
    name: "Cadeira madeira",
    price: 200.01,
    quantity: 2
  });
  await setDoc(doc(productsRef), {
    category: "cadeira",
    description: "Cadeira Gamer preta regulável",
    image: "https://images.unsplash.com/photo-1612011213721-3936d387f318",
    name: "Cadeira Gamer",
    price: 800.01,
    quantity: 2
  });
}

export default dbSeeds;