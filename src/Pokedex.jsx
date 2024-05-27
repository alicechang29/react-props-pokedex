import Pokecard from './Pokecard.jsx';
import './Pokedex.css';

/**Given a list of pokemon cards, rendering Pokecard element
 * App > Pokedex > Pokecard
*/
function Pokedex({ pokemon }) { //FIXME: rename to Pokemon
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
            </div>
        </div>
    );
}

export default Pokedex;