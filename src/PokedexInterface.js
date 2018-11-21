import React, { Component} from 'react'
import Abilities from './Abilities'
import Moves from './Moves'
import Stats from './Stats'
import Types from './Types'


import Genus from './Genus'
import Flavor from './FlavorText'

import Capitalize from './Capitalize'

import {Top} from './Styled'


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
    console.log(this.props.pokemonExtra)
    return ( 
      <div className="pokeMain">
        <h1>Characteristics</h1>
        <Top>
          <div className="img">
            <div>
              <h3>{Capitalize(name).replace(/-/g, ' ')}</h3>
              {<Genus genera={genera}/>}
              <h6>Normal:</h6>
              <img alt={Capitalize(name) + "'s Front Picture"} src={sprites.front_default}/>
              <img alt={Capitalize(name) + "'s Back Picture"} src={sprites.back_default}/>
            </div>
            <div>
              <h6>Shiny:</h6>
              <img alt={Capitalize(name) + "'s Shiny Front Picture"} src={sprites.front_shiny}/>
              <img alt={Capitalize(name) + "'s Shiny Back Picture"} src={sprites.back_shiny}/>
            </div>
          </div>

          <div className="phenoType">
            <div>
              <h6>Pokemon National: #{id}</h6>
              {<Types types={types}/>}
              {<Abilities abilities={abilities}/>}
            </div>
          </div>
          <div>
            {<Stats stats={stats}/>}
          </div>
        </Top>

        <div>
          {<Flavor flavor_text_entries={flavor_text_entries}/>}
        </div>
        
        <div>
          {<Moves moves={moves}/>}
        </div>

      </div>
    );
  }
}

export default PokedexInterface;

