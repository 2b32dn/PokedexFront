import React from 'react'
import Capitalize from './Capitalize'

export const Moves = ({ moves }) => (
  <div>
    <div>
    <h1>Moveset </h1>
    {moves.map(moveInfo => (
      <div key={moveInfo.move.name}>
        <h6 >{Capitalize(moveInfo.move.name.replace(/-/g, ' '))}</h6>
        {moveInfo.version_group_details.map(moveDetails => {
          console.log(moveDetails)
          return (moveDetails.level_learned_at > 0) ?
          <div>
            {/* Level:{' ' + moveDetails.level_learned_at + ' '}
            {Capitalize(moveDetails.version_group.name.replace(/-/g, ' '))} */}
          </div>
          :
          <div>
            {/* TM or Tutor */}
          </div>
        })}
      </div>
    ))}
  </div>
  </div>
)

export default Moves