import React, { Component } from 'react'
import './Position.css'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"

const getLink = (position, dragHandleProps) => (
  <Link className='container' to={`/positions/${position.id}`}>
    <div {...dragHandleProps}>
      <FaBars className="handler" />
    </div>
    <h3>{position.name}</h3>
  </Link>
)

export default class PositionsList extends Component {
  positionLink(position, index) {
    return (
      <li key={position.id}>
        <Draggable draggableId={position.id} index={index}>
          {provided => <div {...provided.draggableProps} ref={provided.innerRef}>
            {getLink(position, provided.dragHandleProps)}
          </div>}
        </Draggable>
      </li>
    )
  }

  positionList() {
    return this.props.positions.map((position, index) =>
      this.positionLink(position, index)
    );
  }

  render() {
    return <div><ul>{this.positionList()}</ul></div>
  }
}
