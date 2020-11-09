import React from 'react';

const Card = (props) => {
  const renderTitle = () => (
    <h1 className="code f4 ttc bg-red washed-yellow ma0 pv1 br2 br--top" style={props.titleStyle}>
      {props.title}
      {
        props.subtitle && (
          <span className="courier f6 db" style={props.subtitleStyle}>
            {props.subtitle}
          </span>
        )
      }
    </h1>
  );

  const renderImage = () => (
    props.imageSource && (
      <img
        src={props.imageSource}
        className="db center mt1 ph1 h5 w5"
        style={props.imageStyle}
        alt="pokemon"
      />
    )
  );

  const renderContent = () => (
    props.children ? props.children : <p style={props.textContentStyle}>{props.textContent}</p>
  );

  return (
    <div className="mh1 mv3" style={props.containerStyle}>
      <div
        className="tc bg-washed-yellow br2 shadow-5 pointer grow"
        style={props.contentContainerStyle}
      >
        {renderTitle()}
        {renderImage()}
        {renderContent()}
      </div>
    </div>
  );
};

export default Card;
