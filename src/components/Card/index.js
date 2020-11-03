import React from 'react';

const Card = (props) => {
  const renderTitle = () => (
    <h1 className="f4 ttc" style={props.titleStyle}>
      {props.title}
    </h1>
  );

  const renderImage = () => (
    props.imageSource && (
      <img
        src={props.imageSource}
        className="br-100 mt2 bg-light-yellow ba b--black-10"
        style={props.imageStyle}
        alt="pokemon"
      />
    )
  );

  const renderContent = () => (
    props.children ? props.children : <p style={props.textContentStyle}>{props.textContent}</p>
  );

  return (
    <div className="fl w-100 w-third-ns pa2" style={props.containerStyle}>
      <div
        className="tc pb3 br2 bg-white shadow-5 pointer grow center w-75-l"
        style={props.contentContainerStyle}
      >
        {renderImage()}
        <div>
          {renderTitle()}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Card;
