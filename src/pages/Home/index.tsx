import { ReactElement } from 'react';

import heroImage from '../../assets/images/hero-image.jpg';

const Home = (): ReactElement => {
  return (
    <div>
      <div>
        <h2 className="text-center text-2xl italic my-8">
          The best place to the get your Anime Products
        </h2>
        <img alt="Showing Naruto, Goku, and Attack on Titan" className="mx-auto" src={heroImage} />
      </div>
    </div>
  );
};

export default Home;
