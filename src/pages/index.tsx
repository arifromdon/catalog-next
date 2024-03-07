import React from 'react';
import { GetServerSideProps } from 'next';
import ProductList from '@/components/pages/ProductList';
import { RootState } from '@/store/types';

const CatalogPage: React.FC<{ initialReduxState: RootState }> = ({ initialReduxState }) => {
  const products = initialReduxState.products ?? [];

  return <ProductList products={products} />
};

export default CatalogPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://65e9db7fc9bf92ae3d3a7219.mockapi.io/catalog');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return {
    props: {
      initialReduxState: {
        products: data,
      },
    },
  };
};
