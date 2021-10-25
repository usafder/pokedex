import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Card } from '../../components';
import { hidePopup } from '../../core/actionCreators/popup';
import { getClassNameForType, padString } from '../../shared/utils';

const PokemonDetail = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const id = padString(selectedPokemon.id);

  const dispatch = useDispatch();
  const dispatchHidePopup = () => dispatch(hidePopup());

  const renderCloseButton = () => (
    <button
      className="absolute top-0 right-0 mt2 mr2 fw6 ba br-100 b--black-10 bg-dark-gray near-white dim pointer"
      onClick={dispatchHidePopup}
    >
      &times;
    </button>
  );

  const renderImage = () => (
    <img
      src={`${process.env.REACT_APP_POKE_IMG_BASE_URL}/${id}.png`}
      alt="pokemon"
      className="h5-l w5-l bg-near-white br-100 shadow-1"
    />
  );

  const renderNameAndID = () => (
    <h1 className="code ma0 f2">
      {selectedPokemon.name}
      <span className="courier f5 db">#{id}</span>
    </h1>
  );

  const renderType = () => (
    <div className="flex flex-wrap justify-center">
      {
        selectedPokemon.types.map(({ type }) => (
          <Badge
            key={type.name + id}
            label={type.name}
            backgroundColor={getClassNameForType(type.name)}
          />
        ))
      }
    </div>
  );

  const renderField = (label, value) => (
    <>
      <span className="fw6">{label}:</span> {value}
    </>
  );

  const renderFieldsGroup = (title, fields) => (
    <Card title={title} >
      <ul className="bg-white list ma0 pl0">
        {
          fields.map((field) => (
            <li key={field.label} className="pa2">{renderField(field.label, field.value)}</li>
          ))
        }
      </ul>
    </Card>
  );

  const renderOtherDetails = () => {
    const firstFieldsGroup = [
      { label: 'weight', value: `${selectedPokemon.weight / 10}kg` },
      { label: 'height', value: `${selectedPokemon.height / 10}m` },
      {
        label: 'abilities',
        value: selectedPokemon.abilities.map((ability) => ability.ability.name).join(', '),
      },
    ];
    const secondFieldsGroup = selectedPokemon.stats.map((item) => ({
      label: item.stat.name, value: item.base_stat,
    }));

    return (
      <div className="w-70-ns center-ns ph2 pa0-ns f6">
        {renderFieldsGroup('Profile', firstFieldsGroup)}
        {renderFieldsGroup('Base Stats', secondFieldsGroup)}
      </div>
    );
  };

  return (
    <div className="tc ttc pa2 pt3-l">
      {renderCloseButton()}
      {renderImage()}
      {renderNameAndID()}
      {renderType()}
      {renderOtherDetails()}
    </div>
  );
};

export default PokemonDetail;
