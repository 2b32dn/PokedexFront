import React from 'react'

export const Moves = ({ moves }) => (
  <div>
    <h3>Moves: </h3>
    {moves.map(moveInfo => (
      <div key={moveInfo.move.name}>{moveInfo.move.name}</div>
    ))}
  </div>
)

export default Moves