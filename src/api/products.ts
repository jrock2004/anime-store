type Price = {
  currency: string;
  value: number;
};

export type Products = {
  id: string;
  name: string;
  description: string;
  price: Price;
  imageUrl: string;
  featured: boolean;
};

export const getFeaturedProducts = (): Promise<Products[]> => {
  return fetch('http://localhost:3005/api/products?featured=true').then((response) =>
    response.json()
  );
};
