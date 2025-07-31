interface CategoryProps {
  id: string;
  name: string;
}
export interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  category: CategoryProps;
  image: string;
  quantity: number;
}