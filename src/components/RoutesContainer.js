import React, { Component } from 'react'
import './Routes.css'
import PositionsList from './PositionsList'
import { Droppable } from 'react-beautiful-dnd'

export default class RoutesContainer extends Component {
  render() {
    return (
      <div>
        <header className="Routes-header">Route A</header>
        <Droppable droppableId='route-a'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <PositionsList />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}
