import React from 'react';

export const Flavor = ({flavor_text_entries}) => (
  <div>
    <h3>Flavor Text</h3>
    <div>
      {flavor_text_entries.map((flavor, index) => {
        return (flavor.language.name === 'en') ?
        <div>
          <h3>
            {flavor.version.name}
          </h3>
          <div key={index}>
            {flavor.flavor_text}
          </div>
        </div>
        :
        <div key={index}></div>
      })}
    </div>
  </div>
)

export default Flavor