import './Pokecard.css';

function Pokecard({ pkCard }) {
    const { id, name, type, base_experience } = pkCard;

    const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    + id
    + ".png";

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