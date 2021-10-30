import { ReactElement } from 'react';

import { Products } from '../../api/products';

type FeaturedProductType = {
  product: Products;
};

export const FeaturedProduct = ({ product }: FeaturedProductType): ReactElement => {
  return (
    <div className="border rounded inline-block p-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg">{product.name}</h3>
        <span className="text-3xl">${product.price.value}</span>
      </div>
      <div className="flex">
        <p className="line-clamp-5 w-64 mr-4">{product.description}</p>
        <img alt={product.description} className="object-cover w-36" src={product.imageUrl} />
      </div>
    </div>
  );
};
