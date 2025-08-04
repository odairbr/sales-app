'use client'

import ItemListContainer from "@/components/ItemListContainer";
import { useCart } from "@/contexts/cart";

const CartPage = () => {
  const { totalItems, totalAmount, cart } = useCart()

  if (totalItems === 0) {
    return (
      <div className="text-0xl text-amber-700">
        <div className="container space-x-2 p-2">
          <div className="text-2xl">
            Não há produtos no seu carrinho!
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-0xl text-amber-700">
      <div className="container space-x-2 p-2">
        <div className="text-2xl">
          Total de itens: <span className="font-bold" >{totalItems}</span>
        </div>
        <div className="text-2xl">
          Valor Total: <span className="font-bold" >R$ {totalAmount}</span>
        </div>
        <ItemListContainer items={cart} title={'Carrinho'} />
      </div>
    </div>
  )
}

export default CartPage;