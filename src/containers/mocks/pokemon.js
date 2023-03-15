export const PIKACHU_MOCK_DATA = {
  abilities: [
    {
      ability: {
        name: 'static'
      }
    },
    {
      ability: {
        name: 'lightning-rod'
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
        name: 'hp'
      }
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'attack'
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
        name: 'special-defense'
      }
    },
    {
      'base_stat': 90,
      stat: {
        name: 'speed'
      }
    }
  ],
  types: [
    {
      type: {
        name: 'electric'
      }
    }
  ],
  weight: 60
};

export const CHARIZARD_MOCK_DATA = {
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

export const MEWTWO_MOCK_DATA = {
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

export const POKEMON_LIST_API_MOCK_RESPONSE = {
  results: [
    { id: PIKACHU_MOCK_DATA.id, name: PIKACHU_MOCK_DATA.name, url: `https://pokeapi.co/api/v2/pokemon/${PIKACHU_MOCK_DATA.id}/` },
    { id: CHARIZARD_MOCK_DATA.id, name: CHARIZARD_MOCK_DATA.name, url: `https://pokeapi.co/api/v2/pokemon/${CHARIZARD_MOCK_DATA.id}/` },
    { id: MEWTWO_MOCK_DATA.id, name: MEWTWO_MOCK_DATA.name, url: `https://pokeapi.co/api/v2/pokemon/${MEWTWO_MOCK_DATA.id}/` },
  ]
};
