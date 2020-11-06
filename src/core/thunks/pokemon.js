import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
} from '../actionTypes/pokemon';
import apiClient from '../../services/apiClient';

export const getPokemonList = () => (dispatch) => {
  dispatch({ type: GET_POKEMON_LIST })
  apiClient.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then((response) => {
      Promise.all(response.results.map((item) => apiClient.get(item.url)))
        .then((data) => dispatch({ type: GET_POKEMON_LIST_SUCCESS, payload: data }))
    })
    .catch((error) => dispatch({ type: GET_POKEMON_LIST_FAILURE, payload: error }));
};
