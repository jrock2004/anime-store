import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../../assets/images/hero-image.jpg';
import { getFeaturedProducts, Products } from '../../api/products';
import { FeaturedProduct } from '../../components/FeaturedProduct';

const Home = (): ReactElement => {
  const [featuredProducts, setFeatureProducts] = useState<Products[]>([]);

  useEffect(() => {
    getFeaturedProducts().then((response) => {
      setFeatureProducts(response);
    });
  }, []);

  return (
    <div>
      <div className="px-4">
        <h2 className="text-center text-2xl italic my-8">
          The best place to the get your Anime Products
        </h2>
        <img alt="Showing Naruto, Goku, and Attack on Titan" className="mx-auto" src={heroImage} />
        {featuredProducts && featuredProducts.length > 0 && (
          <div className="mt-12">
            {featuredProducts.map((product) => (
              <Link key={`product-${product.id}`} to={`/product/${product.id}`}>
                <FeaturedProduct product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
