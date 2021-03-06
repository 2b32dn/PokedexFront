import React from 'react';
import Capitalize from './Capitalize'

export const Flavor = ({flavor_text_entries}) => (
  <div>
    <h1>Flavor Text</h1>
    <div>
      {flavor_text_entries.map((flavor, index) => {
        return (flavor.language.name === 'en') ?
        <div>
          <h4>
            {Capitalize(flavor.version.name)}
          </h4>
          <div key={index}>
            {Capitalize(flavor.flavor_text)}
          </div>
        </div>
        :
        <div key={index}></div>
      })}
    </div>
  </div>
)

export default Flavor