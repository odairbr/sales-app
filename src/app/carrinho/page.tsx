'use client'

import ItemListContainer from "@/components/ItemListContainer";
import { useCart } from "@/contexts/cart";

const CartPage = () => {
  const { totalItems, totalAmount, cart } = useCart()

  return (
    <div className="text-0xl text-amber-700">
      <div className="container space-x-2 p-2">
        <div className="text-2xl font-bold">
          Total de itens: {totalItems}
        </div>
        <div className="text-2xl font-bold">
          Valor Total: {totalAmount}
        </div>
        <ItemListContainer items={cart} title={'Carrinho'} />
      </div>
    </div>
  )
}

export default CartPage;