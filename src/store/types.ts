export interface Product {
  id: string;
  name: string;
  description: string;
}

export interface RootState {
  products: Product[];
  product: Product;
}
