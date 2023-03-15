import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import App from './App';
import apiClient from 'api/api-client';

jest.mock('api/api-client', () => ({
  ...jest.requireActual,
  get: jest.fn()
}));

const PIKACHU_DATA = {
  abilities: [
    {
      ability: {
        name: 'static',
      }
    },
    {
      ability: {
        name: 'lightning-rod',
      }
    }
  ],
  height: 4,
  id: 25,
  name: 'pikachu',
  stats: [
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: 'hp',
      }
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'attack',
      }
    },
    {
      base_stat: 40,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/'
      }
    },
    {
      'base_stat': 50,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/'
      }
    },
    {
      'base_stat': 50,
      stat: {
        name: 'special-defense',
      }
    },
    {
      'base_stat': 90,
      stat: {
        name: 'speed',
      }
    }
  ],
  types: [
    {
      type: {
        name: 'electric',
      }
    }
  ],
  weight: 60
};

const CHARIZARD_DATA = {
  abilities: [
    {
      ability: {
        name: 'blaze',
      }
    },
    {
      ability: {
        name: 'solar-power',
      }
    }
  ],
  height: 17,
  id: 6,
  name: 'charizard',
  stats: [
    {
      'base_stat': 78,
      stat: {
        name: 'hp'
      }
    },
    {
      'base_stat': 84,
      stat: {
        name: 'attack'
      }
    },
    {
      'base_stat': 78,
      stat: {
        name: 'defense'
      }
    },
    {
      'base_stat': 109,
      stat: {
        name: 'special-attack'
      }
    },
    {
      'base_stat': 85,
      stat: {
        name: 'special-defense'
      }
    },
    {
      'base_stat': 100,
      stat: {
        name: 'speed'
      }
    }
  ],
  types: [
    {
      type: {
        name: 'fire'
      }
    },
    {
      type: {
        name: 'flying'
      }
    }
  ],
  weight: 905
};

const MEWTWO_DATA = {
  abilities: [
    {
      ability: {
        name: 'pressure'
      }
    },
    {
      ability: {
        name: 'unnerve'
      }
    }
  ],
  height: 20,
  id: 150,
  name: 'mewtwo',
  stats: [
    {
      'base_stat': 106,
      stat: {
        name: 'hp'
      }
    },
    {
      'base_stat': 110,
      stat: {
        name: 'attack'
      }
    },
    {
      'base_stat': 90,
      stat: {
        name: 'defense'
      }
    },
    {
      'base_stat': 154,
      stat: {
        name: 'special-attack'
      }
    },
    {
      'base_stat': 90,
      stat: {
        name: 'special-defense'
      }
    },
    {
      'base_stat': 130,
      stat: {
        name: 'speed'
      }
    }
  ],
  types: [
    {
      type: {
        name: 'psychic'
      }
    }
  ],
  weight: 1220
};

const POKEMON_LIST_RESPONSE = {
  results: [
    { id: PIKACHU_DATA.id, name: PIKACHU_DATA.name, url: `https://pokeapi.co/api/v2/pokemon/${PIKACHU_DATA.id}/` },
    { id: CHARIZARD_DATA.id, name: CHARIZARD_DATA.name, url: `https://pokeapi.co/api/v2/pokemon/${CHARIZARD_DATA.id}/` },
    { id: MEWTWO_DATA.id, name: MEWTWO_DATA.name, url: `https://pokeapi.co/api/v2/pokemon/${MEWTWO_DATA.id}/` },
  ]
};

const mockApiCalls = () => {
  when(apiClient.get)
    .calledWith(`${process.env.REACT_APP_POKE_API_BASE_URL}?limit=151`)
    .mockResolvedValue(POKEMON_LIST_RESPONSE)
    .calledWith(`https://pokeapi.co/api/v2/pokemon/${PIKACHU_DATA.id}/`)
    .mockResolvedValueOnce(PIKACHU_DATA)
    .calledWith(`https://pokeapi.co/api/v2/pokemon/${CHARIZARD_DATA.id}/`)
    .mockResolvedValueOnce(CHARIZARD_DATA)
    .calledWith(`https://pokeapi.co/api/v2/pokemon/${MEWTWO_DATA.id}/`)
    .mockResolvedValueOnce(MEWTWO_DATA);
};

const renderApp = () => render(
  <div id="root">
    <App />
  </div>
);

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

describe('App', () => {
  describe('given the list of pokemons has been loaded', () => {
    describe('when the user clicks one of the pokemons', () => {
      it('then display the details of that pokemon in a popup', async () => {
        mockApiCalls();
        renderApp();

        const pokemonToSelect = await screen.findByText('pikachu');
        await userEvent.click(pokemonToSelect);

        const popup = screen.getByRole('dialog');
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
});
