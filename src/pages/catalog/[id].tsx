import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from '@/components/pages/ProductDetail';
import { RootState } from '@/store/types';
import { fetchProductDetail } from '@/store/actions';

const ProductDetailPage: React.FC = () => {
  const { query: { id } } = useRouter();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product?.product);

  useEffect(() => {
    dispatch(fetchProductDetail(id)); // CSR fetch
  }, []);

  return <ProductDetail product={product} />
};

export default ProductDetailPage;
