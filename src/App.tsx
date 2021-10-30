import { ReactElement } from 'react';

import './app.css';

const App: React.FC = (): ReactElement => {
  return (
    <div>
      <header>Header</header>
      <main>This is main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
