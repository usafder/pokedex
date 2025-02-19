import React from 'react';
import { useAtomValue } from 'jotai';
import { selectedPokemonAtom } from 'state/atoms';
import { padString } from 'utils';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';

const PokemonDetails = () => {
  const selectedPokemon = useAtomValue(selectedPokemonAtom);
  const selectedPokemonId = padString(selectedPokemon.id);

  return (
    <div className="tc ttc ph2 pt3">
      <img
        src={`${process.env.REACT_APP_POKE_IMG_BASE_URL}/${selectedPokemon.id}.svg`}
        alt="pokemon"
        height={250}
        width={250}
        className="bg-near-white br-100 shadow-1"
      />

      <h1 className="code ma0 f2">
        {selectedPokemon.name}
        <span className="courier f5 db">#{selectedPokemonId}</span>
      </h1>

      <PokemonType />
      <PokemonStats />
    </div>
  );
};

export default PokemonDetails;
