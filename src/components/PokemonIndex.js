import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
 
class PokemonIndex extends React.Component {


  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemonAll => {
        this.setState({
          pokemons: pokemonAll
        })
      })
  }
 
  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} value={this.state.search} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} search={this.state.search} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
