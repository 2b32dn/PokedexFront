import React, { Component,Fragment } from 'react'
import PokedexInterface from './PokedexInterface'
import PreviousPokemon from './PreviousPokemon'
import NextPokemon from './NextPokemon'

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
      <div>
        <form onSubmit={this.fetchPokeData}>
          <input type='text' value={this.state.searchInput} onChange={this.handleSearchInput}/>
          <input type='submit'/>
        </form>
       
        {!this.state.pokemonData ? 
          <div></div> 
          : 
          <div>
            {<PreviousPokemon pokemonInfo={this.state.pokemonData}/>}
            {<PokedexInterface pokemonInfo={this.state.pokemonData}/>}
            {<NextPokemon pokemonInfo={this.state.pokemonData}/>}
          </div>
        }
      </div>
    );
  }
}
 
export default SearchEngine;