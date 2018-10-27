import React, { Component, Fragment} from 'react'
import Abilities from './Abilities'
import Moves from './Moves'
import Stats from './Stats'
import Types from './Types'



class PokedexInterface extends Component {
  Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  render() {
    const { abilities,moves, name, stats, types } = this.props.pokemonInfo
    console.log(this.props.pokemonInfo)
    return ( 
      <Fragment>
        <h2>{this.Capitalize(name)}</h2> 
        {<Types types={types}/>}
        {<Abilities abilities={abilities}/>}
        {<Moves moves={moves}/>}
        {<Stats stats={stats}/>}
      </Fragment>
    );
  }
}

export default PokedexInterface;

