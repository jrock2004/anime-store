import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';

import Home from './pages/Home';

const App: React.FC = (): ReactElement => {
  return (
    <Router>
      <div className="h-full flex flex-col">
        <header className="border-b p-4 flex justify-between">
          <h1>Anime Store</h1>
          <Nav />
        </header>
        <main className="p-4">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="border-t p-4 flex justify-between mt-auto">
          <Nav />
        </footer>
      </div>
    </Router>
  );
};

export default App;
