
function Pokedex({pokemonCards}){
    return(
        <div className="Pokedex">
            <div className="container">
                <div className="row">
                    {pokemonCards.map(
                        card => <div className="col-3">{card}</div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Pokedex;