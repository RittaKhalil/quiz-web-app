import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";

class App extends Component {
  
  render(){  
    return (
      <div>      
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Quiz" component={Quiz}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;