import React, { Component} from 'react'
import Abilities from './Abilities'
import Moves from './Moves'
import Stats from './Stats'
import Types from './Types'

import Genus from './Genus'
import Flavor from './FlavorText'

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
    const { flavor_text_entries, genera } = this.props.pokemonExtra
    console.log(this.props.pokemonInfo)
    // console.log(this.props.pokemonExtra)
    return ( 
      <div className="pokeMain">
        <h2>{Capitalize(name)}</h2> 
        {id}
        <div>
          Normal:
          <img alt={Capitalize(name) + "'s Front Picture"} src={sprites.front_default}/>
          {/* <img alt={Capitalize(name) + "'s Back Picture"} src={sprites.back_default}/> */}
          Shiny:
          <img alt={Capitalize(name) + "'s Shiny Front Picture"} src={sprites.front_shiny}/>
          {/* <img alt={Capitalize(name) + "'s Shiny Back Picture"} src={sprites.back_shiny}/> */}
        </div>
        <div>
          {<Genus genera={genera}/>}
        </div>
        <div>
          {<Flavor flavor_text_entries={flavor_text_entries}/>}
        </div>
        <div>
          {<Types types={types}/>}
          {<Abilities abilities={abilities}/>}
          {<Stats stats={stats}/>}
        </div>
        <div>
          {<Moves moves={moves}/>}
        </div>
      </div>
    );
  }
}

export default PokedexInterface;

