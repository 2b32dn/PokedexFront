import React from 'react'

export const Abilities = ({ abilities }) => (
  <div>
    <h3>Abilities: </h3> 
    {abilities.map(abilityInfo => (
      <div key={abilityInfo.ability.name}>{abilityInfo.ability.name}</div>
    ))}
  </div>
)

export default Abilities