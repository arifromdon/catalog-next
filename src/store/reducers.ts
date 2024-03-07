import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types';

interface ProductState {
  products: Product[];
  product: Product | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setProduct(state, action: PayloadAction<Product>) {
      state.product = action.payload;
    },
  },
});

export const { setProducts, setProduct } = productSlice.actions;
export default productSlice.reducer;
