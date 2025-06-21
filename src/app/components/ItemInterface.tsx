interface ItemProps {
  id: number;
  name: string;
  amount: number;
  available: boolean;
}

interface ItemListProps {
  title: string;
  items: ItemProps[];
}
