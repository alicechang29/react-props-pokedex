import './App.css';
import Pokegame from './Pokegame.jsx';

//FIXME: move this into Pokedex and pass in Pokedex as default prop - this way people can pass in their own decks
// In react, put data exactly where you want it to be. App doesn't care what the cards are


/**App for Pokemon cards
 * Given list of pokemon, outputs cards.
 */
function App() {
  return (
    <div className="App">
      <Pokegame />
    </div>
  );
};

export default App;
