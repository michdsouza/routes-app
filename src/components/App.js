import React, { Component } from 'react'
import "./App.css"
import RoutesContainer from "./RoutesContainer"
import { DragDropContext } from "react-beautiful-dnd"
import routesData from '../data/routesData';

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
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.routes.map((route) => {
          const positions = route.positionIds.map(positionId => this.state.positions[positionId])
          return <RoutesContainer
            key={route.id}
            route={route}
            positions={positions}
          />
        })}
      </DragDropContext>
    )
  }
}
