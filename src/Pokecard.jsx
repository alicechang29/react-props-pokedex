import './Pokecard.css';

/**Given a pokemon card, creates div element for the card */
function Pokecard({ pkCard }) { //FIXME: instead of passing in pkCard, pass in the 4 individual fields bc breaking them up immediately and readability
    const { id, name, type, base_experience } = pkCard;

    const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    + id
    + ".png";

    //FIXME: add an alt tag for the image
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-header">{name}</h2>
            <img src={imageURL} />
            <p className="Pokecard-info">
                Type: {type}
                <br/>
                EXP: {base_experience}
            </p>
        </div>
    );
}

export default Pokecard;