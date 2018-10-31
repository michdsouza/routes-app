import React, { Component } from 'react'
import './Position.css'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"

export default class PositionsList extends Component {
  positionLink(position, index) {
    return <li key={position.id}>
        <Draggable draggableId={position.id} index={index}>
          {(provided, snapshot) => <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            >
            <Link className='container' to={`/positions/${position.id}`}>
              <div {...provided.dragHandleProps}>
                <FaBars className="handler" />
              </div>
              <h3>{position.name}</h3>
            </Link>
          </div>}
        </Draggable>
      </li>;
  }

  positionList() {
    return this.props.positions.map((position, index) =>
      this.positionLink(position, index)
    );
  }

  render() {
    return <div>
      <ul>{this.positionList()}</ul>
      </div>
  }
}
