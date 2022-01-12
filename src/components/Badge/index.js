import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => {
  const badgeSize = { large: 'f4', medium: 'f5', small: 'f6' };

  return (
    <div
      className={`ma1 ph2 pv1 br2 ${badgeSize[props.size] ?? 'f6'} ${props.backgroundColor}`}
      style={props.badgeStyle}
    >
      {props.label}
    </div>
  );
};

Badge.propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  badgeStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};

export default Badge;
