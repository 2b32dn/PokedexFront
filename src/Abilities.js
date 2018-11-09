import React from 'react'
import Capitalize from './Capitalize'

export const Abilities = ({ abilities }) => (
  <div>
    <h3>Abilities: </h3> 
    {abilities.map(abilityInfo => {
      return (!abilityInfo.is_hidden) ? 
      <div key={abilityInfo.ability.name}> 
        <h6>Main Ability: </h6> {Capitalize(abilityInfo.ability.name.replace(/-/g, ' '))}
      </div> :
      <div key={abilityInfo.ability.name}>
        <h6>Hidden Ability: </h6> {Capitalize(abilityInfo.ability.name.replace(/-/g, ' '))} 
      </div>
    })}
  </div>
)

export default Abilities