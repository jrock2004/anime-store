import { ReactElement } from 'react';

import { Products } from '../../api/products';

type FeaturedProductType = {
  isHome?: boolean;
  product: Products;
};

export const FeaturedProduct = ({ isHome, product }: FeaturedProductType): ReactElement => {
  return (
    <div
      className={`border rounded inline-block p-4 w-full overflow-hidden ${
        isHome ? 'sm:w-96' : 'sm:w-auto'
      } hover:shadow-lg`}
    >
      <div className="flex justify-between mb-4">
        <h3 className="text-lg">{product.name}</h3>
        <span className="text-3xl">${product.price.value}</span>
      </div>
      <div className="flex">
        <div>
          <p className="line-clamp-5 mr-2 text-sm" title={product.description}>
            {product.description}
          </p>
        </div>
        <img
          alt={product.description}
          className="object-cover w-28 hidden sm:block"
          src={product.imageUrl}
        />
      </div>
    </div>
  );
};
