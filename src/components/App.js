import React, { Component } from 'react';
import RoutesContainer from "./RoutesContainer";
import './App.css';
import PositionsList from './PositionsList';
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={RoutesContainer} />
          <Route path='/positions' component={PositionsList} />
        </div>
      </BrowserRouter>
    );
  }
}
