import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProducts, Products } from '../../api/products';
import { FeaturedProduct } from '../../components/FeaturedProduct';

const ProductListing = (): ReactElement => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const filterHandler = (element: React.FormEvent<HTMLInputElement>): void => {
    const value = element.currentTarget.value;

    if (value === '') {
      setIsFiltered(false);
      setFilteredProducts(products);
    } else {
      setIsFiltered(true);
      const results = products.filter(
        (product) => product.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );

      setFilteredProducts(results);
    }
  };

  const Listing = (): ReactElement => {
    if (filteredProducts.length > 0) {
      return (
        <>
          {filteredProducts.map((product) => (
            <Link key={`product-${product.id}`} to={`/product/${product.id}`}>
              <FeaturedProduct product={product} />
            </Link>
          ))}
        </>
      );
    } else {
      return (
        <>
          {products.map((product) => (
            <Link key={`product-${product.id}`} to={`/product/${product.id}`}>
              <FeaturedProduct product={product} />
            </Link>
          ))}
        </>
      );
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl text-center mt-4">Product Listing</h2>

      <div className="mt-8">
        <label className="mr-2" htmlFor="filterList">
          Filter:
        </label>
        <input
          className="border px-3 py-2 rounded"
          data-testid="filterListButton"
          id="filterList"
          type="text"
          onChange={filterHandler}
        />
      </div>

      <div className="mt-12">
        {isFiltered && filteredProducts.length === 0 ? (
          <h4 className="text-xl">No Products found!</h4>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <Listing />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
