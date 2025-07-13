interface RatingProps {
  rate: number;
  count: number;
}
interface CategoryProps {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryProps;
  images: string[];
  rating: RatingProps;
  creationAt: string;
  updatedAt: string;
}