import React from 'react';
import './index.css';

const Popup = (props) => (
  <div
    className="tc absolute t-0 w-100 h-100 flex items-center justify-center popup-container"
    style={props.popupContainerStyle}
  >
    <div className="relative w-75 h-75 bg-white br2" style={props.popupContentContainerStyle}>
      <div className="absolute top-0 right-0 mt2 mr3 fw8 pointer dim" onClick={props.hidePopup}>X</div>
      {props.children}
    </div>
  </div>
);

export default Popup;
