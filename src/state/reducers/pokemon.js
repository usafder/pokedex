import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
  SET_SELECTED_POKEMON,
} from '../action-types/pokemon';

export const INITIAL_STATE = {
  isLoading: true,
  error: null,
  list: [],
  selectedPokemon: {},
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return { ...INITIAL_STATE };
    case GET_POKEMON_LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: [...action.payload] };
    case GET_POKEMON_LIST_FAILURE:
      return { ...state, isLoading: false, error: action.payload, list: [] };
    case SET_SELECTED_POKEMON:
      return { ...state, selectedPokemon: { ...action.payload } };
    default:
      return state;
  }
};

export default pokemonReducer;
