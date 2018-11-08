import React, { Component } from 'react'
import PokedexInterface from './PokedexInterface'
import PreviousPokemon from './PreviousPokemon'
import NextPokemon from './NextPokemon'
import Capitalize from './Capitalize'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Header} from './Styled'
import 'bootstrap/dist/css/bootstrap.min.css';


const API = 'https://pokeapi.co/api/v2/pokemon/'
const API2 = 'https://pokeapi.co/api/v2/pokemon-species/'

class SearchEngine extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      pokemonData: null,
      pokemonExtra: null,
      collapsed: true
    }
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Pokedex</NavbarBrand>
          <form onSubmit={this.fetchPokeData}>
            <input type='text' value={this.state.searchInput} onChange={this.handleSearchInput} required />
            <input type='submit'/>
          </form>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {!this.state.pokemonData ? 
          <div></div> 
          : 
          <div className="header">

            <Header>
              <div className="previousBtn">{<PreviousPokemon previousBtn={this.handlePreviousPokemon} />}</div>
              <h1 className="pkmnName">
                {Capitalize(this.state.pokemonData.name)}
              </h1>
              <div className="nextBtn">{<NextPokemon nextBtn={this.handleNextPokemon}/>}</div>
            </Header>

            <div>
              <div>{<PokedexInterface pokemonInfo={this.state.pokemonData} pokemonExtra={this.state.pokemonExtra}/>}</div>
            </div>

          </div>
        }
      </div>
    );
  }
}
 
export default SearchEngine;