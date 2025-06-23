import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ItemListContainer from './ItemListContainer'
import { cartItems } from './data'

function CartWidget () {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle> Carrinho </DialogTitle>
          <DialogDescription> Carrinho </DialogDescription>
        </DialogHeader>
        <ItemListContainer items={cartItems} />
        <DialogFooter>
          <Button onClick={() => alert('Working in progress!')}> submit </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default CartWidget;
