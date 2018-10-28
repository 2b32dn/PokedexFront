import React from 'react';
import Capitalize from './Capitalize'

export const Types = ({types}) => (
  <div>
    <h3>Types: </h3>
    {types.map( typeInfo => (
      <div key={typeInfo.type.name}>
        {Capitalize(typeInfo.type.name)}
      </div>
    ))}
  </div>
)

export default Types