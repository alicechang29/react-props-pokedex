import { shuffle } from "lodash";
import Pokedex from "./Pokedex.jsx";

const pkCards = shuffle([
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]);

//TODO: docstring
function Pokegame({ pokemon = pkCards }) {
  const deck1 = pokemon.slice(0, 4);
  const deck2 = pokemon.slice(4);

  const p1IsWinner = calculateExp(deck1) > calculateExp(deck2);

  return (
    <div className="Pokegame">
      <Pokedex pokemon={deck1} winner={p1IsWinner} />
      <Pokedex pokemon={deck2} winner={!p1IsWinner} />
    </div>
  );
}

function calculateExp(deck) {

  return deck.reduce((acc, pk) => acc + pk.base_experience, 0);
}

export default Pokegame;

/*
1 - add in the winner message within pokegame
2 - can create a pokeCardHand component - which tells you if youre the winner and gives pokeDecks
*/