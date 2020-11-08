import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
} from '../actionTypes/pokemon';

export const getPokemonList = () => ({ type: GET_POKEMON_LIST });

export const getPokemonListSuccess = (data) => ({ type: GET_POKEMON_LIST_SUCCESS, payload: data });

export const getPokemonListFailure = (error) => ({ type: GET_POKEMON_LIST_FAILURE, payload: error });
