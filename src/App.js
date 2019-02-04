import React, { Component } from 'react';
import LogIn from './containers/logincontainer';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component ={LogIn}/>
          <Route path = "/login" component = {LogIn}/>
          <Route path = "/welcome" component = {Welcome}/>
        </Switch>
      </BrowserRouter>
      );
  }
}
export default App;
