import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = (): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  const menuToggleHandler = (): void => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button className="sm:hidden" data-testid="mobile-menu" onClick={menuToggleHandler}>
        <span className="sr-only">Mobile Menu</span>
        {expanded ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        )}
      </button>
      <nav
        className={`${
          expanded
            ? 'top-12 right-0 absolute bg-white border w-44 px-3 flex flex-col transition'
            : 'hidden'
        } sm:block sm:relative sm:border-none sm:w-auto sm:top-0`}
      >
        <NavLink
          exact
          activeClassName="text-indigo-700 font-semibold"
          className="text-indigo-600 py-2 sm:py-0"
          data-testid="home-link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="text-indigo-700 font-semibold"
          className="text-indigo-600 py-2 sm:ml-4 sm:py-0"
          data-testid="products-link"
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          exact
          activeClassName="text-indigo-700 font-semibold"
          className="text-indigo-600 py-2 sm:ml-4 sm:py-0"
          data-testid="about-link"
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};
