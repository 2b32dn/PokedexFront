import React from 'react'
import Capitalize from './Capitalize'

export const Moves = ({ moves }) => (
  <div>
    <h3>Moves: </h3>
    {moves.map(moveInfo => (
      <div key={moveInfo.move.name}>
        <h6>{Capitalize(moveInfo.move.name.replace(/-/g, ' '))}</h6>
        {moveInfo.version_group_details.map(moveDetails => {
          return (moveDetails.level_learned_at > 0) ?
          <div>
            Level: {moveDetails.level_learned_at}
            {Capitalize(moveDetails.version_group.name.replace(/-/g, ' '))}
          </div>
          :
          <div></div>
        })}
      </div>
    ))}
  </div>
)

export default Moves