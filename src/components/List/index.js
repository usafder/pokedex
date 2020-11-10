import React from 'react';

const List = (props) => {
  return (
    <div className="flex flex-wrap justify-around" style={props.listContainerStyle}>
      {props.dataSource.map((data, index) => props.renderItem(data, index))}
    </div>
  );
};

export default List;
