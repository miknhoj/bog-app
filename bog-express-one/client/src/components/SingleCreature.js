import React, { Component } from 'react'

export default class SingleCreature extends Component {
    render() {

        return (
          <div>
            <h1>One Creature</h1>
            <div>{this.props.name}</div>
          </div>
        );
      }
    }

