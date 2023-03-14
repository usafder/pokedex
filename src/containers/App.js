import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Header, List, Popup, Spinner } from '../components';
import { showPopup } from '../state/action-creators/popup';
import { setSelectedPokemon } from '../state/action-creators/pokemon';
import { fetchPokemonList } from '../state/thunks/pokemon';
import { padString } from '../utils';
import PokemonDetails from '../components/PokemonDetails';

function App() {
  const pokemonList = useSelector((state) => state.pokemon.list);
  const isListLoading = useSelector((state) => state.pokemon.isLoading);
  const isPopupVisible = useSelector((state) => state.popup.isVisible);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const showSelectedPokemon = (data) => () => {
    dispatch(setSelectedPokemon(data));
    dispatch(showPopup());
  };

  const renderSpinner = () => (<Spinner loadingText="Loading..." />);

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

  const renderList = () => (<List dataSource={pokemonList} renderItem={renderItem} />);

  return (
    <div>
      <Header />
      <Popup isVisible={isPopupVisible}>
        <PokemonDetails />
      </Popup>
      {isListLoading ? renderSpinner() : renderList()}
    </div>
  );
}

export default App;
