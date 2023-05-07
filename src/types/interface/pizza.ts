export interface MyPizza {
  id?: string;
  imageUrl?: string;
  title: string;
  types?: Array<number>;
  sizes?: Array<number>;
  info?: string;
  price?: number;
  category?: number;
  rating?: number;
}
