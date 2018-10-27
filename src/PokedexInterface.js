import React, { Component } from 'react'
import Abilities from './Abilities'

class PokedexInterface extends Component {
  render() {
    const { abilities } = this.props.pokemonInfo
    // console.log(pokemonInfo
    return ( 
      <div>
        {abilities && <Abilities abilities={abilities}/>}
        
      </div>
    );
  }
}

export default PokedexInterface;

