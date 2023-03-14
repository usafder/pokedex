import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';

const PokemonStatsCard = ({ title, fields }) => (
  <Card title={title} >
    <ul className="bg-white list ma0 pl0">
      {
        fields.map((field) => (
          <li key={field.label} className="pa2">
            <span className="fw6">{field.label}:</span> {field.value}
          </li>
        ))
      }
    </ul>
  </Card>
);

PokemonStatsCard.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
};

export default PokemonStatsCard;
