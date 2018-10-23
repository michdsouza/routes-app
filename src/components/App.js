import React, { Component } from 'react'
import "./App.css"
import RoutesContainer from "./RoutesContainer"
import Position from "./Position"
import { DragDropContext } from "react-beautiful-dnd"
import routesData from '../data/routesData'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default class App extends Component {
  state = routesData

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if(!destination) {
      return
    }

    if ((destination.droppableId == source.droppableId) &&
      (destination.index == source.index)) {
      return
    }
    const route = this.state.routes.find(r => r.id === source.droppableId)
    const newPositionIds = route.positionIds
    newPositionIds.splice(source.index, 1)
    newPositionIds.splice(destination.index, 0, draggableId)

    const newRoute = { ...route, positionIds: newPositionIds }
    const newRoutes = [...this.state.routes]
    const foundIndex = newRoutes.findIndex(x => x.id === route.id)
    newRoutes[foundIndex] = newRoute
    const newState = { ...this.state, routes: newRoutes }
    this.setState(newState)
  }

  render() {
    const route = this.state.routes[0]
    const positions = route.positionIds.map(positionId => this.state.positions[positionId])

    return <Router>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Switch>
            <Route
              exact path="/"
              render={props => (
                <RoutesContainer {...props} route={route} positions={positions} />
              )}
            />
            <Route
              path="/positions/:positionId"
              render={props => (
                <Position {...props} positions={positions} />
              )}
            />
          </Switch>
        </DragDropContext>
      </Router>;
  }
}

