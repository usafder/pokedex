import React from 'react';
import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import App from './App';
import apiClient from 'api/api-client';
import {
  PIKACHU_MOCK_DATA,
  CHARIZARD_MOCK_DATA,
  MEWTWO_MOCK_DATA,
  POKEMON_LIST_API_MOCK_RESPONSE
} from './mocks/pokemon';

jest.mock('api/api-client', () => ({
  ...jest.requireActual,
  get: jest.fn()
}));

const mockApiCalls = () => {
  when(apiClient.get)
    .calledWith(`${process.env.REACT_APP_POKE_API_BASE_URL}?limit=151`)
    .mockResolvedValue(POKEMON_LIST_API_MOCK_RESPONSE)
    .calledWith(POKEMON_LIST_API_MOCK_RESPONSE.results[0].url)
    .mockResolvedValueOnce(PIKACHU_MOCK_DATA)
    .calledWith(POKEMON_LIST_API_MOCK_RESPONSE.results[1].url)
    .mockResolvedValueOnce(CHARIZARD_MOCK_DATA)
    .calledWith(POKEMON_LIST_API_MOCK_RESPONSE.results[2].url)
    .mockResolvedValueOnce(MEWTWO_MOCK_DATA);
};

const renderApp = () => render(
  <div id="root">
    <App />
  </div>
);

const renderAppWithMockedApiCalls = async () => {
  mockApiCalls();
  await act(() => renderApp());
};

const closePopupIfVisible = async () => {
  const popup = screen.queryByRole('dialog');
  if (popup) {
    const popupCloseButton = within(popup).getByRole('button', { name: 'close' });
    await userEvent.click(popupCloseButton);
  }
};

const assertProfileSection = (popup) => {
  const profileSection = within(popup).getByRole('list', { name: 'Profile' });
  const profileSectionHeading = within(popup).getByRole('heading', { name: 'Profile' });
  expect(profileSectionHeading).toBeVisible();
  const pokemonWeight = within(profileSection).getByRole('listitem', { name: 'weight' });
  expect(pokemonWeight).toHaveTextContent('weight: 6kg');
  const pokemonHeight = within(profileSection).getByRole('listitem', { name: 'height' });
  expect(pokemonHeight).toHaveTextContent('height: 0.4m');
  const pokemonAbilities = within(profileSection).getByRole('listitem', { name: 'abilities' });
  expect(pokemonAbilities).toHaveTextContent('abilities: static, lightning-rod');
};

const assertBaseStatsSection = (popup) => {
  const baseStatsSection = within(popup).getByRole('list', { name: 'Base Stats' });
  const baseStatsSectionHeading = within(popup).getByRole('heading', { name: 'Base Stats' });
  expect(baseStatsSectionHeading).toBeVisible();
  const pokemonHp = within(baseStatsSection).getByRole('listitem', { name: 'hp' });
  expect(pokemonHp).toHaveTextContent('hp: 35');
  const pokemonAttack = within(baseStatsSection).getByRole('listitem', { name: 'attack' });
  expect(pokemonAttack).toHaveTextContent('attack: 55');
  const pokemonDefense = within(baseStatsSection).getByRole('listitem', { name: 'defense' });
  expect(pokemonDefense).toHaveTextContent('defense: 40');
  const pokemonSpecialAttack = within(baseStatsSection).getByRole('listitem', { name: 'special-attack' });
  expect(pokemonSpecialAttack).toHaveTextContent('special-attack: 50');
  const pokemonSpecialDefense = within(baseStatsSection).getByRole('listitem', { name: 'special-defense' });
  expect(pokemonSpecialDefense).toHaveTextContent('special-defense: 50');
  const pokemonSpeed = within(baseStatsSection).getByRole('listitem', { name: 'speed' });
  expect(pokemonSpeed).toHaveTextContent('speed: 90');
};

describe('Pokedex App', () => {
  beforeEach(() => renderAppWithMockedApiCalls());

  afterEach(() => closePopupIfVisible());

  describe('given the list of pokemons has loaded', () => {
    it('then displays the list of pokemons to the user', async () => {
      const pokemonList = await screen.findByRole('list');
      const pikachu = within(pokemonList).getByText(PIKACHU_MOCK_DATA.name);
      const charizard = within(pokemonList).getByText(CHARIZARD_MOCK_DATA.name);
      const mewtwo = within(pokemonList).getByText(MEWTWO_MOCK_DATA.name);
    
      expect(pikachu).toBeVisible();
      expect(charizard).toBeVisible();
      expect(mewtwo).toBeVisible();
    });

    describe('when the user clicks on one of the pokemons', () => {
      it('then displays the details of that pokemon in a popup', async () => {
        const pokemonToSelect = await screen.findByText('pikachu');
        await userEvent.click(pokemonToSelect);
        const popup = await screen.findByRole('dialog');
        expect(popup).toBeVisible();
        const pokemonName = within(popup).getByRole('heading', { name: 'pikachu #025' });
        expect(pokemonName).toBeVisible();
        const pokemonImg = within(popup).getByRole('img', { name: 'pokemon' });
        expect(pokemonImg).toBeVisible();
        assertProfileSection(popup);
        assertBaseStatsSection(popup);
      });
    });
  });

  describe('given the popup to display the details of a pokemon is open', () => {
    describe('when the user clicks on the close button', () => {
      it('then hides the popup', async () => {
        const pokemonToSelect = await screen.findByText('pikachu');
        await userEvent.click(pokemonToSelect);
        const popup = await screen.findByRole('dialog');
        expect(popup).toBeVisible();
        await closePopupIfVisible();

        expect(popup).not.toBeVisible();
      });
    });
  });
});
