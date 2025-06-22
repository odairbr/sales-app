import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { useState } from 'react';

const CartWidget: React.FC = () => {
  // const [count, setCount] = useState(0);
  // const increment = () => { setCount(prev => prev + 1); };
  // const decrement = () => { setCount(prev => Math.max(0, prev - 1)); };

  return (
    <Button variant="outline" size="sm" className="relative">
      <ShoppingCart className="h-4 w-4 mr-2" />
      Cart
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        3
      </span>
    </Button>
  )
}

export default CartWidget;
