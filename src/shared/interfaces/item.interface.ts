export interface ItemListProps {
  title?: string;
  items: ItemProps[];
}

export interface ItemComponent {
  item: ItemProps
}

export interface ItemProps {
  id: number;
  name: string;
  amount: number;
  available: boolean;
}
