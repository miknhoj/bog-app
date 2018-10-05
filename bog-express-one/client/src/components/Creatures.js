import React, { Component } from 'react'
import axios from 'axios'

export default class Creatures extends Component {
    state = {
        creatures: [],
    }

    componentDidMount = async () => {
        const response = await axios.get(`/api/creatures`)
        this.setState({ creatures: response.data })
    }

  render() {
      const creatureList = this.state.creatures.map((creature, i) => {
          return (
              <div key={i}>
                Name
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
