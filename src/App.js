import React, { Component } from 'react';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/home';
import Presentation from './components/student/Presentation';
import Exercises from './components/student/Exercise';
import Roadmap from './components/student/Roadmap';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/presentation' component={Presentation} />
          <Route path='/roadmap' component={Roadmap} />
          <Route path='/exercises' component={Exercises} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
