import React, { Component } from 'react'
import './Routes.css'
import PositionsList from './PositionsList'
import { Droppable } from 'react-beautiful-dnd'

const getDroppableStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightyellow" : "white"
})

export default class RoutesContainer extends Component {
  render() {
    return <div>
        <header className="Routes-header">{this.props.route.title}</header>
        <Droppable droppableId={this.props.route.id}>
        {(provided, snapshot) =>
          <div className='droppable'
               ref={provided.innerRef} {...provided.droppableProps}
               style={getDroppableStyle(snapshot.isDraggingOver)}>
            <PositionsList positions={this.props.positions} />
            {provided.placeholder}
          </div>}
        </Droppable>
      </div>
  }
}
