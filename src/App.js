import React, { Component } from 'react';
import './App.css';
import { FormGroup, InputGroup } from "@blueprintjs/core";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import LogIn from './components/LogIn'

class App extends Component {
  render() {
    return (
      <div className="App">
         <LogIn />
      </div>
    );
  }
}

export default App;
