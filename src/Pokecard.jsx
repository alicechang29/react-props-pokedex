import './Pokecard.css';

const IMAGE_URL = "https://raw.githubusercontent.com/" +
    `PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

function Pokecard({ id, name, type, base_experience }) {
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-header">{name}</h2>
            <img src={IMAGE_URL} />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}

export default Pokecard;