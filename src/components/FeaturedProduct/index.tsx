import { ReactElement } from 'react';

import { Products } from '../../api/products';

type FeaturedProductType = {
  product: Products;
};

export const FeaturedProduct = ({ product }: FeaturedProductType): ReactElement => {
  return (
    <div className="border rounded inline-block p-4 w-96 overflow-hidden hover:shadow-lg">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg">{product.name}</h3>
        <span className="text-3xl">${product.price.value}</span>
      </div>
      <div className="flex">
        <div>
          <p className="line-clamp-5 w-60 mr-2 text-sm">{product.description}</p>
        </div>
        <img alt={product.description} className="object-cover w-28" src={product.imageUrl} />
      </div>
    </div>
  );
};
