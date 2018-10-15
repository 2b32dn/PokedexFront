import React, { Component,Fragment } from 'react'
import PokedexInterface from './PokedexInterface'

const API = 'https://pokeapi.co/api/v2/pokemon/'

class SearchEngine extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      pokemonData: {}
    }
    // this.fetchPokeData = this.fetchPokeData.bind(this.pokemonData);
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
     .then(resJSON => this.setState({ pokemonData: resJSON }))
     .catch(err => console.log("Error", err) )
     this.setState({ searchInput: '' })
  }
  render() {
    console.log(this) 
    return (
      <Fragment>
        <form onSubmit={this.fetchPokeData}>
          <input type='text' value={this.state.searchInput} onChange={this.handleSearchInput}/>
          <input type='submit'/>
        </form>
        <div>{Object.entries(this.state.pokemonData).map((item)=><div>{item}</div>)}</div>
        <PokedexInterface pokemonData={this.state.pokemonData}/>
      </Fragment>
    );
  }
}
 
export default SearchEngine;