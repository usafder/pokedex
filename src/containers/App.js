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
      <Card
        key={data.name + id}
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
    );
  };

  const renderList = () => (<List dataSource={pokemonList} renderItem={renderItem} />);

  return (
    <div>
      <Header />
      {
        isPopupVisible && (
          <Popup hidePopup={dispatchHidePopup}>
            <p>Work in progress.</p>
          </Popup>
        )
      }
      {isListLoading ? renderSpinner() : renderList()}
    </div>
  );
}

export default App;
