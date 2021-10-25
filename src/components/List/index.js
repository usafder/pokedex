import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  return (
    <div className="flex flex-wrap justify-around" style={props.listContainerStyle}>
      {props.dataSource.map((data, index) => props.renderItem(data, index))}
    </div>
  );
};

List.propTypes = {
  renderItem: PropTypes.func,
  dataSource: PropTypes.array,
  listContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};

export default List;
