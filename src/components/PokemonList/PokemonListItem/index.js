import React from 'react';
import { useSetAtom } from 'jotai';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { isPopupVisibleAtom, selectedPokemonAtom } from 'state/atoms';
import { padString } from 'utils';

const PokemonListItem = ({ data }) => {
  const setSelectedPokemon = useSetAtom(selectedPokemonAtom);
  const setIsPopupVisible = useSetAtom(isPopupVisibleAtom);
  const id = padString(data.id);

  const showSelectedPokemon = () => {
    setSelectedPokemon(data);
    setIsPopupVisible(true);
  };

  return (
    <div className="grow pointer">
      <Card
        title={data.name}
        subtitle={`#${id}`}
        imageSource={`${process.env.REACT_APP_POKE_IMG_BASE_URL}/${data.id}.svg`}
        onClickHandler={showSelectedPokemon}
      />
    </div>
  );
};

PokemonListItem.propTypes = {
  data: PropTypes.object
};

export default PokemonListItem;
