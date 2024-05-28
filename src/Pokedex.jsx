import Pokecard from './Pokecard.jsx';
import './Pokedex.css';

/**Given a list of pokemon cards, rendering Pokecard element
 * App > Pokedex > Pokecard
*/
function Pokedex({ pokemon, winner }) {
    let message; //make this a ternary
    if (winner) {
        message = "THIS HAND WINS!";
    }
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex</h1>
            <div className="container">
                <div className="row">
                    {pokemon.map(
                        pk =>
                            <div className="col-3">
                                <Pokecard pkCard={pk} />
                            </div>
                    )}
                </div>
                <div className="Pokedex-winner">{message}</div>
            </div>

        </div>
    );
}

export default Pokedex;