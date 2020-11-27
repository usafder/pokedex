import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Card, Header, List, Popup, Spinner } from '../components';
import { showPopup, hidePopup } from '../core/actionCreators/popup';
import { fetchPokemonList } from '../core/thunks/pokemon';
import { getClassNameForType, padString } from '../utils';

function App() {
  const dispatch = useDispatch();
  const dispatchShowPopup = () => dispatch(showPopup());
  const dispatchHidePopup = () => dispatch(hidePopup());

  const pokemonList = useSelector((state) => state.pokemon.list);
  const isListLoading = useSelector((state) => state.pokemon.isLoading);
  const isPopupVisible = useSelector((state) => state.popup.isVisible);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const renderSpinner = () => (<Spinner loadingText="Loading..." />);

  const renderItem = (data) => {
    const id = padString(data.id);

    return (
      <div key={data.name + id} className="grow pointer">
        <Card
          title={data.name}
          subtitle={`#${id}`}
          imageSource={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
          onClickHandler={dispatchShowPopup}
        >
          <div className="flex flex-wrap justify-center pb1">
            {
              data.types.map(({ type }) => (
                <Badge
                  key={type.name + id}
                  label={type.name}
                  backgroundColor={getClassNameForType(type.name)}
                />
              ))
            }
          </div>
        </Card>
      </div>
    );
  };

  const renderList = () => (<List dataSource={pokemonList} renderItem={renderItem} />);

  return (
    <div>
      <Header />
      <Popup isVisible={isPopupVisible}>
        <p>Work in progress.</p>
        <button onClick={dispatchHidePopup}>Close</button>
      </Popup>
      {isListLoading ? renderSpinner() : renderList()}
    </div>
  );
}

export default App;
