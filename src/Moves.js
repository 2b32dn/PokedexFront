import React from 'react'
import Capitalize from './Capitalize'

export const Moves = ({ moves }) => (
  <div>
    <h3>Moves: </h3>
    {moves.map(moveInfo => {
      return (moveInfo.version_group_details.level_learned_at > 0) ?
      <div key={moveInfo.move.name}>
        Main: 
        {Capitalize(moveInfo.move.name.replace(/-/g, ' '))}
        {moveInfo.version_group_details.map(moveDetails => (
          <div>
            {moveDetails.level_learned_at}
            {moveDetails.move_learn_method.name}
            {moveDetails.version_group.name}
          </div>
        ))}
      </div>
      :
      <div key={moveInfo.move.name}>
        <h6>{Capitalize(moveInfo.move.name.replace(/-/g, ' '))}</h6>
        {moveInfo.version_group_details.map(moveDetails => (
          <div>
            {moveDetails.level_learned_at}
            {moveDetails.move_learn_method.name}
            {moveDetails.version_group.name}
          </div>
        ))}
      </div>
    })}
  </div>
)

export default Moves