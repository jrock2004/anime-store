import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = (): ReactElement => {
  return (
    <nav>
      <NavLink
        activeClassName="text-indigo-700 font-semibold"
        className="text-indigo-600"
        data-testid="home-link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="text-indigo-700 font-semibold"
        className="text-indigo-600 ml-4"
        data-testid="products-link"
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        activeClassName="text-indigo-700 font-semibold"
        className="text-indigo-600 ml-4"
        data-testid="about-link"
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};
