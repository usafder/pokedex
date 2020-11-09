import React from 'react';
import { Card } from '../';
import { getClassNameForType } from '../../utils';

const List = (props) => {
  return (
    <div className="flex flex-wrap justify-around">
      {
        props.dataSource.map((data) => (
          <Card
            key={data.name + data.id}
            title={data.name}
            imageSource={`https://veekun.com/dex/media/pokemon/global-link/${data.id}.png`}
          >
            {
              // nested .map(...) not an issue since types is at most 2 in length
              data.types.map((item, index) => (
                <span
                  key={item.type.name + item.id}
                  className={`f6 dib mv2 ph2 pv1 br2 ${getClassNameForType(item.type.name)} ${index > 0 ? 'ml1' : ''}`}
                >
                  {item.type.name}
                </span>
              ))
            }
          </Card>
        ))
      }
    </div>
  );
};

export default List;
