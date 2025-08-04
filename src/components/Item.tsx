import { Check } from 'lucide-react';
import { CartItem } from '@/shared/interfaces/item.interface';
import Image from 'next/image';
import { Button } from './ui/button';
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useCart } from '@/contexts/cart';

interface ItemCart {
  item: CartItem
}

function Item({ item }: ItemCart) {
  const { addToCart, removeFromCart } = useCart()
  return (

    <div key={item.id}
      className={'border-amber-400 bg-white/95 text-black-95'}
    >
      <div className="flex items-center gap-4">
        <div className={'bg-amber-450 border-amber-95 px-1'}>
          <Check />
        </div>
        <Image
          src={item.image}
          alt={item.name}
          priority={false}
          width={50}
          height={50}
          className="hover:scale-105 transition-transform duration-300"
        />
        <div className={'bg-amber-450 border-amber-95 px-1'}>
          <span className={'text-lg font-light'}>
            {item.name}
          </span>
        </div>

        <div className={'bg-amber-450 border-amber-95 px-1'}>
          <span className={'text-lg font-light'}>
            {item.quantity}
          </span>
        </div>
        <div>
          <span className="px-1">
            <Button onClick={() => addToCart({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: 1,
              image: item.image
            })}
            >
              <PlusCircleIcon />
            </Button>
          </span>

          <span className="px-1">
            <Button onClick={() => removeFromCart(item.id)}>
              <MinusCircleIcon />
            </Button>
          </span>
        </div>
      </div>
    </div>

  )
}

export default Item;