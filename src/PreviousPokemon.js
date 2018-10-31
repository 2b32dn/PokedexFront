import React, { Component,Fragment } from 'react'
import PokedexInterface from './PokedexInterface'
const API = 'https://pokeapi.com/api/v2/pokemon/'

class PreviousPokemon extends Component {
  constructor(){
    super();
    this.state = {
      pokemonData: null
    }
  }
  fetchPreviousPokeData = () => {
    // console.log('type', API + `${this.props.pokemonInfo.id - 1}/`)
    fetch(API + `${this.props.pokemonInfo.id - 1}/`, {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(resJSON => this.setState({ pokemonData: resJSON}))
      .catch(err => console.log(err))
      .then(console.log("Fetch Succesful"))
  }
  render() {
    console.log('props', this.props)
    // console.log(this.state.pokemonData)
    return (
      <Fragment>
        <button onClick={this.fetchPreviousPokeData}>Previous Pokemon</button>
        {!this.state.pokemonData ? <div></div> : <PokedexInterface pokemonInfo={this.state.pokemonData}/>}
      </Fragment>
    );
  }
}
 
export default PreviousPokemon;