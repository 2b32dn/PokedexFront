import React from 'react'
import Capitalize from './Capitalize'

export const Moves = ({ moves }) => (
  <div>
    <h3>Moves: </h3>
    {moves.map(moveInfo => (
      <div key={moveInfo.move.name}>
        {Capitalize(moveInfo.move.name)}
      </div>
    ))}
  </div>
)

export default Moves