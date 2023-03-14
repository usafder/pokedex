import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
  SET_SELECTED_POKEMON,
} from '../action-types/pokemon';
import pokemonReducer, { INITIAL_STATE } from './pokemon';

describe('pokemon reducer', () => {
  it('returns the initial state', () => {
    expect(pokemonReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('handles GET_POKEMON_LIST', () => {
    expect(pokemonReducer(INITIAL_STATE, { type: GET_POKEMON_LIST })).toEqual(INITIAL_STATE);
  });

  it('handles GET_POKEMON_LIST_SUCCESS', () => {
    const action = { type: GET_POKEMON_LIST_SUCCESS, payload: [{ key: 'val' }] };
    expect(pokemonReducer(INITIAL_STATE, action))
      .toEqual({ ...INITIAL_STATE, isLoading: false, error: null, list: action.payload });
  });

  it('handles GET_POKEMON_LIST_FAILURE', () => {
    const action = { type: GET_POKEMON_LIST_FAILURE, payload: new Error('Error occurred') };
    expect(pokemonReducer(INITIAL_STATE, action))
      .toEqual({ ...INITIAL_STATE, isLoading: false, error: action.payload, list: [] });
  });

  it('handles SET_SELECTED_POKEMON', () => {
    const action = { type: SET_SELECTED_POKEMON, payload: { key: 'val' } };
    expect(pokemonReducer(INITIAL_STATE, action))
      .toEqual({ ...INITIAL_STATE, selectedPokemon: action.payload });
  });
});
