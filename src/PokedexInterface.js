import React, { Component, Fragment} from 'react'
import Abilities from './Abilities'
import Moves from './Moves'
import Stats from './Stats'
import Types from './Types'

class PokedexInterface extends Component {
  render() {
    const { abilities,moves, name, stats, types } = this.props.pokemonInfo
    console.log(this.props.pokemonInfo)
    return ( 
      <Fragment>
        <h2>{name.split(" ")}</h2> 
        {<Abilities abilities={abilities}/>}
        {<Moves moves={moves}/>}
        {<Stats stats={stats}/>}
        {<Types types={types}/>}
      </Fragment>
    );
  }
}

export default PokedexInterface;

