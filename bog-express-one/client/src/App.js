import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import SingleCreature from './components/SingleCreature'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Creatures} />
            <Route exact path='/:id' component={SingleCreature}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
