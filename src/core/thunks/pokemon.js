import {
  getPokemonList,
  getPokemonListSuccess,
  getPokemonListFailure,
} from '../actionCreators/pokemon';
import apiClient from '../../services/apiClient';


export const fetchPokemonList = () => (dispatch) => {
  dispatch(getPokemonList());
  apiClient.get(`${process.env.REACT_APP_POKE_API_BASE_URL}?limit=151`)
    .then((response) => {
      Promise.all(response.results.map((item) => apiClient.get(item.url)))
        .then((data) => dispatch(getPokemonListSuccess(data)));
    })
    .catch((error) => dispatch(getPokemonListFailure(error)));
};
