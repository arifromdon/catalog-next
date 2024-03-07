import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/store/types';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <div className="products">
    <div className="products__card">
      {products.map((item: any) => (
        <Link href={`/catalog/${item.id}`} key={item._id}>
          <figure className="products__card--item">
            <Image
              src={item.product_image}
              alt={`catalog-${item.id}`}
              width={200}
              height={150}
            />
            <h2>${item.product_price}</h2>
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
          </figure>
        </Link>
      ))}
    </div>
  </div>
)

export default ProductList;
