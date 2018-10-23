import React, { Component } from "react"
import "./Position.css"
import { Draggable } from "react-beautiful-dnd"
import { Link } from "react-router-dom"

export default class PositionsList extends Component {
  positionLink(position, index) {
    return <li key={position.id}>
        <Draggable draggableId={position.id} index={index}>
          {provided => <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <h3>
                <Link to={`/positions/${position.id}`}>
                  {position.name}
                </Link>
              </h3>
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
