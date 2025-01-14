import React from 'react';
import PropTypes from 'prop-types';

const arePropsEqual = (prevProps, nextProps) => (
  prevProps.title === nextProps.title && prevProps.subtitle === nextProps.subtitle
);

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
        className="db center ph1"
        width={250}
        height={250}
        style={props.imageStyle}
        alt="pokemon"
      />
    )
  );

  const renderContent = () => (
    props.children ? props.children : <p style={props.textContentStyle}>{props.textContent}</p>
  );

  return (
    <div className="mh1 mv3" style={props.containerStyle} onClick={props.onClickHandler}>
      <div className="tc bg-washed-yellow br2 shadow-5" style={props.contentContainerStyle}>
        {renderTitle()}
        {renderImage()}
        {renderContent()}
      </div>
    </div>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageSource: PropTypes.string,
  textContent: PropTypes.string,
  onClickHandler: PropTypes.func,
  children: PropTypes.element,
  titleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  subtitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  imageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  textContentStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};

export default React.memo(Card, arePropsEqual);
