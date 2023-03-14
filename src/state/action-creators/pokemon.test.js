import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
  SET_SELECTED_POKEMON,
} from '../action-types/pokemon';
import { 
  getPokemonList,
  getPokemonListSuccess,
  getPokemonListFailure,
  setSelectedPokemon,
} from './pokemon';

describe('pokemon action creator', () => {
  it('getPokemonList', () => {
    expect(getPokemonList()).toEqual({ type: GET_POKEMON_LIST });
  });

  it('getPokemonListSuccess', () => {
    expect(getPokemonListSuccess()).toEqual({ type: GET_POKEMON_LIST_SUCCESS });
  });

  it('getPokemonListFailure', () => {
    expect(getPokemonListFailure()).toEqual({ type: GET_POKEMON_LIST_FAILURE });
  });

  it('setSelectedPokemon', () => {
    expect(setSelectedPokemon({})).toEqual({ type: SET_SELECTED_POKEMON, payload: {} });
  });
});
