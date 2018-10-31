import React, { Component,Fragment } from 'react'
import PokedexInterface from './PokedexInterface'
import PreviousPokemon from './PreviousPokemon'

const API = 'https://pokeapi.co/api/v2/pokemon/'

class SearchEngine extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      pokemonData: null,
    }
  }
  handleSearchInput = (e) => {
    this.setState({searchInput: e.target.value})
  }
  fetchPokeData = (e) => {
    e.preventDefault()
    fetch( API + `${this.state.searchInput}/`, {
      method: 'GET',
      mode: 'cors'
    })
     .then(res => res.json())
     .then(resJSON => {
        this.setState({ pokemonData: resJSON })
      })
     .catch(err => console.log("Error", err) )
     this.setState({ searchInput: '' })
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.fetchPokeData}>
          <input type='text' value={this.state.searchInput} onChange={this.handleSearchInput}/>
          <input type='submit'/>
        </form>
        {!this.state.pokemonData ? <div></div> : <PokedexInterface pokemonInfo={this.state.pokemonData} pokemonPreviousInfo={this.state.pokemonData}/>}
        {<PreviousPokemon pokemonInfo={this.state.pokemonData}/>}
      </Fragment>
    );
  }
}
 
export default SearchEngine;