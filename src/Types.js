import React from 'react';

export const Types = ({types}) => (
  <div>
    <h3>Types: </h3>
    {types.map( typeInfo => (
      <div key={typeInfo.type.name}>
        {typeInfo.type.name}
      </div>
    ))}
  </div>
)

export default Types