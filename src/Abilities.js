import React from 'react'

export const Abilities = ({ abilities }) => (
  <div>
    <h3>Abilities: </h3> 
    {abilities.map(abilityInfo => {
      return (!abilityInfo.is_hidden) ? <div key={abilityInfo.ability.name}><h5>Main Ability: </h5> {abilityInfo.ability.name} {console.log(abilityInfo.is_hidden)}</div> :
      <div key={abilityInfo.ability.name}> <h5>Hidden Ability: </h5> {abilityInfo.ability.name} {console.log(abilityInfo.is_hidden)}</div>
    })}
  </div>
)

export default Abilities