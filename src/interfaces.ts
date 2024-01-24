export interface IProduct {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rating: {
    rate: number;
    count: number;
  };
}
