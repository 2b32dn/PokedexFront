import React from 'react';

export const Genus = ({genera}) => (
  <div>
    {genera.map(genusInfo => {
      return (genusInfo.language.name === 'en') ?
      <h6 key={genusInfo.language.name}>
        {genusInfo.genus}
      </h6>
      :
      <div key={genusInfo.language.name}></div>
    }
    )}
  </div>
)

export default Genus