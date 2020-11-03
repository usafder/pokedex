import React from 'react';
import './index.css';

const Spinner = (props) => (
  <div className="absolute spinner-container" style={props.spinnerContainerStyle}>
    <div className="br-100 ba bw4 h3 w3 bg-dark-gray spinner" style={props.spinnerStyle}></div>
    <p style={props.loadingTextStyle}>{props.loadingText}</p>
  </div>
);

export default Spinner;
