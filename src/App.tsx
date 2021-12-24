import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';

import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Product from './pages/Product';
import About from './pages/About';

const App: React.FC = (): ReactElement => {
  return (
    <Router>
      <div className="h-full flex flex-col">
        <header className="border-b p-4 flex justify-between items-baseline">
          <h1 className="font-bold text-2xl">Anime Store</h1>
          <Nav />
        </header>
        <main className="p-4">
          <Switch>
            <Route path="/products">
              <ProductListing />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="border-t p-4 flex justify-between mt-auto">
          <Nav isFooter={true} />
          <a className="text-sm" data-testid="privacy-link" href="https://google.com">
            Privacy
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
