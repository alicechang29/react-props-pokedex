import Pokecard from './Pokecard.jsx';
import './Pokedex.css';

/**Given a list of pokemon cards, rendering Pokecard element
 * App > Pokedex > Pokecard
*/
function Pokedex({ pokemonCards }){ //FIXME: rename to Pokemon
    return(
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex</h1>
            <div className="container">
                <div className="row">
                    {pokemonCards.map(
                        card =>
                        <div className="col-3"><Pokecard pkCard={card}/></div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Pokedex;