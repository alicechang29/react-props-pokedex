import { useState } from 'react';
import logo from './logo.svg'
import './App.css';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount(count => count + 1);
  }

  return (
    <div className="App">
      <main>
        <img src={logo} className="App-logo" alt="Rithm" />
        <h1>Pokedex</h1>
        {/* insert Pokedex component here */}
        <p>
          Edit <code>src/App.jsx</code>
        </p>
      </main>
    </div>
  );
};

export default App;
