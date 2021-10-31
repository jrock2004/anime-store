import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProduct, Products } from '../../api/products';
import { FeaturedProduct } from '../../components/FeaturedProduct';

type ProductType = {
  id: string;
};

const Product = (): ReactElement => {
  const { id } = useParams<ProductType>();
  const [product, setProduct] = useState<Products>();

  useEffect(() => {
    getProduct(id).then((response) => {
      setProduct(response);
    });
  }, [id]);

  if (!product) {
    return <h2 className="font-semibold text-3xl text-center mt-4">Something Went Wrong!</h2>;
  } else {
    return (
      <div>
        <FeaturedProduct product={product} />
      </div>
    );
  }
};

export default Product;
