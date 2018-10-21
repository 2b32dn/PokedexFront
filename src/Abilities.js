import React from 'react'

export const Abilities = ({ abilities }) => (
  <div>
    {console.log(abilities)}
    {abilities.map(abilityInfo => (
      <div>{abilityInfo.ability.name}</div>
    ))}
  </div>
)

export default Abilities