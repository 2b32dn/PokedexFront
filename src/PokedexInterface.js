import React, { Component} from 'react'
import Abilities from './Abilities'
import Moves from './Moves'
import Stats from './Stats'
import Types from './Types'

import Capitalize from './Capitalize'


class PokedexInterface extends Component {
  constructor(){
    super();
    this.state = {
      pokemonData: null
    }
  }

  render() {
    const { abilities, moves, id, name, stats, sprites, types } = this.props.pokemonInfo
    console.log(this.props.pokemonInfo)
    return ( 
      <div className="pokeMain">
        <h2>{Capitalize(name)}</h2> 
        <div>
          Normal:
          <img alt={Capitalize(name) + "'s Front Picture"} src={sprites.front_default}/>
          {/* <img alt={Capitalize(name) + "'s Back Picture"} src={sprites.back_default}/> */}
          Shiny:
          <img alt={Capitalize(name) + "'s Shiny Front Picture"} src={sprites.front_shiny}/>
          {/* <img alt={Capitalize(name) + "'s Shiny Back Picture"} src={sprites.back_shiny}/> */}
        </div>
        <div>
          {id}
          {<Types types={types}/>}
          {<Abilities abilities={abilities}/>}
          {<Stats stats={stats}/>}
        </div>
        <div>
          {/* {<Moves moves={moves}/>} */}
        </div>
      </div>
    );
  }
}

export default PokedexInterface;

