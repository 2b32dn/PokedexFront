import React, { Component } from 'react'

class PokedexInterface extends Component {
  render() {
    console.log(this.props.pokemonInfo)
    return ( 
      <div>
        {/* {this.props.pokemonInfo.name} */}
      </div>
    );
  }
}

export default PokedexInterface;

