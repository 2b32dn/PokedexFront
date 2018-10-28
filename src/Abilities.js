import React from 'react'
import Capitalize from './Capitalize'
export const Abilities = ({ abilities }) => (
  <div>
    <h3>Abilities: </h3> 
    {abilities.map(abilityInfo => {
      return (!abilityInfo.is_hidden) ? 
      <div key={abilityInfo.ability.name}> 
        <h5>Main Ability: </h5> {Capitalize(abilityInfo.ability.name)}
      </div> :
      <div key={abilityInfo.ability.name}>
        <h5>Hidden Ability: </h5> {Capitalize(abilityInfo.ability.name)} 
      </div>
    })}
  </div>
)

export default Abilities