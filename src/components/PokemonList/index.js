import React from 'react';
import PropTypes from 'prop-types';
import { useAtomValue } from 'jotai';
import { asyncPokemonListAtom } from 'state/atoms';
import PokemonListItem from './PokemonListItem';

const PokemonList = (props) => {
  const pokemonList = useAtomValue(asyncPokemonListAtom);

  return (
    <div className={`flex flex-wrap justify-around ${props.cssClass}`}>
      {pokemonList.map((listItem) => <PokemonListItem key={listItem.id} data={listItem} />)}
    </div>
  );
};

PokemonList.propTypes = {
  cssClass: PropTypes.string
};

export default PokemonList;
