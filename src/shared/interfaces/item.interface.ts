export interface ItemListProps {
  title?: string;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ItemComponent {
  item: CartItem
}