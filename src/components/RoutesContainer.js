import React, { Component } from 'react'
import './Routes.css'
import PositionsList from './PositionsList'
import { Droppable } from 'react-beautiful-dnd'

export default class RoutesContainer extends Component {
  render() {
    return <div>
        <header className="Routes-header">{this.props.route.title}</header>
        <Droppable droppableId={this.props.route.id}>
          {provided => <div ref={provided.innerRef} {...provided.droppableProps}>
              <PositionsList positions={this.props.positions} />
              {provided.placeholder}
            </div>}
        </Droppable>
      </div>
  }
}
