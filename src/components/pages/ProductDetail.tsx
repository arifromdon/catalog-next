import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/store/types';

interface ProductListProps {
  product: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ product }) => {
  console.log('product: ', product)
  return (
    <div className="product-detail">
      <div className="product-detail__card">
        <figure className="product-detail__card--item">
          <Image
            src={product?.product_image}
            alt={`catalog-${product?.id}`}
            width={200}
            height={150}
          />
          <h2>${product?.product_price}</h2>
          <h2>{product?.product_name}</h2>
          <p>{product?.description}</p>
        </figure>
      </div>
    </div>
  );
};

export default ProductList;
