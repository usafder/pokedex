import {
  getPokemonList,
  getPokemonListSuccess,
  getPokemonListFailure,
} from '../actionCreators/pokemon';
import apiClient from '../../services/apiClient';


export const fetchPokemonList = () => (dispatch) => {
  dispatch(getPokemonList())
  apiClient.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then((response) => {
      Promise.all(response.results.map((item) => apiClient.get(item.url)))
        .then((data) => dispatch(getPokemonListSuccess(data)))
    })
    .catch((error) => dispatch(getPokemonListFailure(error)));
};
