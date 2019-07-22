import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: true
  }

  handleClick = () => {
    this.setState({
      image: !this.state.image
    })
  }

  

  render() {
    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            <img src={this.state.image ? this.props.imgFront : this.props.imgBack} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
