import React from 'react';
import { useSelector } from 'react-redux';
import Badge from '../Badge';

const POKEMON_TYPE_COLOR = {
  normal: 'bg-moon-gray',
  fire: 'bg-orange near-white',
  water: 'bg-light-blue',
  grass: 'bg-green near-white',
  electric: 'bg-yellow',
  ice: 'bg-lightest-blue',
  fighting: 'bg-dark-red near-white',
  poison: 'bg-light-purple near-white',
  ground: 'bg-gold',
  flying: 'bg-blue near-white',
  psychic: 'bg-hot-pink near-white',
  bug: 'bg-light-green',
  rock: 'bg-light-yellow',
  ghost: 'bg-purple near-white',
  dark: 'bg-mid-gray near-white',
  dragon: 'bg-dark-blue near-white',
  steel: 'bg-silver near-white',
  fairy: 'bg-light-pink',
};

const PokemonType = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  return (
    <div className="flex flex-wrap justify-center">
      {
        selectedPokemon.types.map(({ type }) => (
          <Badge
            key={type.name}
            label={type.name}
            backgroundColor={POKEMON_TYPE_COLOR[type.name]}
          />
        ))
      }
    </div>
  );
};

export default PokemonType;
