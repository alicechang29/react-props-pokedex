import Pokecard from './Pokecard.jsx';
import './Pokedex.css';

function Pokedex({pokemonCards}){
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