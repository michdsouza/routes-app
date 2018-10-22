import React, { Component } from 'react'
import RoutesContainer from "./RoutesContainer"
import './App.css'
import PositionsList from './PositionsList'
import { BrowserRouter, Route } from 'react-router-dom'
import { DragDropContext } from "react-beautiful-dnd";

export default class App extends Component {
  onDragEnd = result => {
    //TODO
  }
  render() {
    return <BrowserRouter>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="App">
            <Route exact path="/" component={RoutesContainer} />
            <Route path="/positions" component={PositionsList} />
          </div>
        </DragDropContext>
      </BrowserRouter>;
  }
}
