import React, { Component } from 'react'
import PokedexInterface from './PokedexInterface'
import PreviousPokemon from './PreviousPokemon'
import NextPokemon from './NextPokemon'


const API = 'https://pokeapi.co/api/v2/pokemon/'
const API2 = 'https://pokeapi.co/api/v2/pokemon-species/'

class SearchEngine extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      pokemonData: null,
      pokemonExtra: null
    }
  }
  handleSearchInput = (e) => {
    this.setState({searchInput: e.target.value})
  }
  handlePreviousPokemon = () => {
    console.log('success! handlePreviousPokemon')
    this.fetchExtraPreviousPokeData()
    this.fetchPreviousPokeData()
  }

  handleNextPokemon = () => {
    console.log('success! handleNextPokemon')
    this.fetchNextPokeData()
    this.fetchExtraNextPokeData()
  }

  fetchPreviousPokeData = () => {
    fetch(API + `${this.state.pokemonData.id - 1}/`, {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(resJSON => this.setState({ pokemonData: resJSON}))
      .catch(err => console.log(err))
  }

  fetchNextPokeData = () => {
    fetch(API + `${this.state.pokemonData.id + 1}/`, {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(resJSON => this.setState({ pokemonData: resJSON}))
      .catch(err => console.log(err))
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
     .catch(err => console.log("Fetch Error", err) )
     this.setState({ searchInput: '' })
     this.fetchExtraPokeData()
  }

  fetchExtraPokeData = () => {
    fetch( API2 + `${this.state.searchInput}/`, {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(resJSON => this.setState({pokemonExtra: resJSON}))
      .catch(err => console.log("Extra Fetch", err))
  }

  fetchExtraPreviousPokeData = () => {
    fetch(API2 + `${this.state.pokemonData.id - 1}/`, {
      method: 'GET',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(resJSON => this.setState({pokemonExtra: resJSON}))
    .catch(err => console.log("Extra Previous Fetch", err))
  }

  fetchExtraNextPokeData = () => {
    fetch(API2 + `${this.state.pokemonData.id + 1}/`, {
      method: 'GET',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(resJSON => this.setState({pokemonExtra: resJSON}))
    .catch(err => console.log("Next Extra Fetch", err))
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
            {<PreviousPokemon previousBtn={this.handlePreviousPokemon} />}
            {<NextPokemon nextBtn={this.handleNextPokemon}/>}
            {<PokedexInterface pokemonInfo={this.state.pokemonData} pokemonExtra={this.state.pokemonExtra}/>}
            
          </div>
        }
      </div>
    );
  }
}
 
export default SearchEngine;