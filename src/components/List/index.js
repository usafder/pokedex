import React from 'react';
import { Card } from '../';

const List = (props) => {
  return props.dataSource.map((data) => (
    <Card
      key={data.id}
      title={data.name}
      imageSource={data.sprites.front_default}
    >
      {
        // nested .map(...) not an issue since types is at most 2 in length
        data.types.map((item, index) => (
          <span
            key={item.type.name + item.id}
            className={`bg-light-silver ph2 pv1 br3 ${index > 0 ? 'ml1' : ''}`}
          >
            {item.type.name}
          </span>
        ))
      }
    </Card>
  ));
};

export default List;
