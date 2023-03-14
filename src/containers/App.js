import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { selectedPokemonAtom, asyncPokemonListAtom, isPopupVisibleAtom } from 'state/atoms';
import PokemonDetails from 'components/PokemonDetails';
import { padString } from 'utils';
import Header from 'components/Header';
import Popup from 'components/Popup';
import List from 'components/List';
import Card from 'components/Card';

function App() {
  const pokemonList = useAtomValue(asyncPokemonListAtom);
  const setSelectedPokemon = useSetAtom(selectedPokemonAtom);
  const setIsPopupVisible = useSetAtom(isPopupVisibleAtom);

  const showSelectedPokemon = (data) => () => {
    setSelectedPokemon(data);
    setIsPopupVisible(true);
  };

  const renderItem = (data) => {
    const id = padString(data.id);

    return (
      <div key={data.name + id} className="grow pointer">
        <Card
          title={data.name}
          subtitle={`#${id}`}
          imageSource={`${process.env.REACT_APP_POKE_IMG_BASE_URL}/${id}.png`}
          onClickHandler={showSelectedPokemon(data)}
        />
      </div>
    );
  };

  return (
    <>
      <Header />
      <Popup>
        <PokemonDetails />
      </Popup>

      <List dataSource={pokemonList} renderItem={renderItem} />
    </>
  );
}

export default App;
