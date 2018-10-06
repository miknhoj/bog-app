import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Creatures extends Component {
    state = {
        creatures: [],
    }
  
    componentDidMount = async () => {
        const response = await axios.get(`/api/creatures`)
        this.setState({ creatures: response.data })
    }

    toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
    }

  render() {
      const creatureList = this.state.creatures.map((creature, i) => {
          return (
              <div key={i}>
                <Link to={`/${creature._id}`}>
                {creature.name}
                </Link>
              </div>
          )
      })
    return (
      <div>
        <h1>Creatures</h1>
        {creatureList}
      </div>
    )
  }
}
