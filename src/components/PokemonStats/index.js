import React from 'react';
import { useSelector } from 'react-redux';
import PokemonStatsCard from './PokemonStatsCard';

const PokemonStats = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  return (
    <div className="w-70-ns center-ns ph2 pa0-ns f6">
      <PokemonStatsCard
        title="Profile"
        fields={[
          { label: 'weight', value: `${selectedPokemon.weight / 10}kg` },
          { label: 'height', value: `${selectedPokemon.height / 10}m` },
          {
            label: 'abilities',
            value: selectedPokemon.abilities.map((ability) => ability.ability.name).join(', '),
          },
        ]}
      />

      <PokemonStatsCard
        title="Base Stats"
        fields={selectedPokemon.stats.map((item) => ({
          label: item.stat.name, value: item.base_stat,
        }))}
      />
    </div>
  );
};

export default PokemonStats;
