import React from 'react';

export const Genus = ({genera}) => (
  <div>
    <h3>Genus</h3>
    {genera.map(genusInfo => {
      return (genusInfo.language.name === 'en') ?
      <div key={genusInfo.language.name}>
        {genusInfo.genus}
      </div>
      :
      <div key={genusInfo.language.name}></div>
    }
    )}
  </div>
)

export default Genus