import { Dispatch } from 'redux';
import { setProduct } from './slice';

export const fetchProductDetail = (productId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`https://65e9db7fc9bf92ae3d3a7219.mockapi.io/catalog/${productId}`);
      const data = await response.json();

      dispatch(setProduct(data));
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };
};