import React, { Component, Fragment} from 'react'
import Abilities from './Abilities'
import Moves from './Moves'
import Stats from './Stats'
import Types from './Types'

import Capitalize from './Capitalize'


class PokedexInterface extends Component {
  render() {
    const { abilities, moves, name, stats, species, sprites, types } = this.props.pokemonInfo
    console.log(this.props.pokemonInfo)
    return ( 
      <Fragment>
        <h2>{Capitalize(name)}</h2> 
        <img alt={Capitalize(name) + "'s Front Picture"} src={sprites.front_default}/>
        <img alt={Capitalize(name) + "'s Back Picture"} src={sprites.back_default}/>
        <img alt={Capitalize(name) + "'s Shiny Front Picture"} src={sprites.front_shiny}/>
        <img alt={Capitalize(name) + "'s Shiny Back Picture"} src={sprites.back_shiny}/>
        {<Types types={types}/>}
        {<Abilities abilities={abilities}/>}
        {<Stats stats={stats}/>}
        {<Moves moves={moves}/>}
        {species.url}
        <button>Previous</button>
        <button>Next</button>
        {console.log(this.props.pokemonState)}
      </Fragment>
    );
  }
}

export default PokedexInterface;

