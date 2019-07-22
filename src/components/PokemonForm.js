import React from 'react'
import { Form } from 'semantic-ui-react'
 
class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'name': this.state.name,
        'stats': [{
          "value": 80,
          "name": "special-defense"
        },
          {
            "value": 80,
            "name": "special-attack"
          },
          {
            "value": 63,
            "name": "defense"
          },
          {
            "value": 62,
            "name": "attack"
          },
          {
            "value": 60,
            "name": "speed"
          },
          {
            'value': this.state.hp,
            'name': 'hp'
        }],
        'sprites': {
          'frontUrl': this.state.front,
          'backUrl': this.state.back
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={this.state.front} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={this.state.back} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
