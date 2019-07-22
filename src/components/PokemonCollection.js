import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
  
class PokemonCollection extends React.Component {
 
  renderPokemonCards = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokemonCard name={pokemon.name} imgFront={pokemon.sprites.front} imgBack={pokemon.sprites.back} hp={pokemon.stats[5].value} />
    })
  }

  filterPokemonCards = () => {
    let pokemonCopy = [...this.props.pokemons]
    let filteredPokemon = pokemonCopy.filter(pokemon => pokemon.name.includes(this.props.search))

    return filteredPokemon.map(pokemon => {
      return <PokemonCard name={pokemon.name} imgFront={pokemon.sprites.front} imgBack={pokemon.sprites.back} hp={pokemon.stats[5].value} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.search === "" ? this.renderPokemonCards() : this.filterPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
