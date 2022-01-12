import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Spinner = (props) => (
  <div
    className="fixed w-100 h-100 flex flex-column items-center justify-center"
    style={props.spinnerContainerStyle}
  >
    <div className="br-100 ba b--dark-red bw4 h3 w3 bg-dark-gray spinner" style={props.spinnerStyle}></div>
    {props.loadingText && <p style={props.loadingTextStyle}>{props.loadingText}</p>}
  </div>
);

Spinner.propTypes = {
  loadingText: PropTypes.string,
  loadingTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  spinnerContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  spinnerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};

export default Spinner;
