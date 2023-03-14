import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../../state/action-creators/popup';
import { padString } from '../../utils';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';

const PokemonDetails = () => {
  const selectedPokemonId = useSelector((state) => padString(state.pokemon.selectedPokemon.id));
  const selectedPokemonName = useSelector((state) => state.pokemon.selectedPokemon.name);

  const dispatch = useDispatch();
  const dispatchHidePopup = () => dispatch(hidePopup());

  return (
    <div className="tc ttc ph2 pt3">
      <button
        className="absolute top-0 right-0 mt2 mr2 fw6 ba br-100 b--black-10 bg-dark-gray near-white dim pointer"
        onClick={dispatchHidePopup}
      >
        &times;
      </button>

      <img
        src={`${process.env.REACT_APP_POKE_IMG_BASE_URL}/${selectedPokemonId}.png`}
        alt="pokemon"
        className="h5-l w5-l bg-near-white br-100 shadow-1"
      />

      <h1 className="code ma0 f2">
        {selectedPokemonName}
        <span className="courier f5 db">#{selectedPokemonId}</span>
      </h1>

      <PokemonType />
      <PokemonStats />
    </div>
  );
};

export default PokemonDetails;
