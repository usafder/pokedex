import { atom } from 'jotai';
import apiClient from '../api/api-client';

export const asyncPokemonListAtom = atom(async () => {
  const response = await apiClient.get(`${process.env.REACT_APP_POKE_API_BASE_URL}?limit=151`);
  const pokemonList = await Promise.all(response.results.map((item) => apiClient.get(item.url)));
  return pokemonList;
});

export const selectedPokemonAtom = atom({});

export const isPopupVisibleAtom = atom(false);
