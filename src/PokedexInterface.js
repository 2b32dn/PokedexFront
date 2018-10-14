import React, { Component, Fragment } from 'react'

class PokedexInterface extends Component {
  constructor(props){
    super(props)
    console.log(this.props.pokemonData)
  }
  render() { 
    return ( 
      <Fragment>
        hi
      </Fragment>
    );
  }
}
 
export default PokedexInterface;