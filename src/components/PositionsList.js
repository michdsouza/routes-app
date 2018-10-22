import React, { Component } from "react"
import Position from "./Position"
import { Link, Route } from "react-router-dom"
import "./Position.css"
import routesData from "../data/routesData"
import { Draggable } from "react-beautiful-dnd";


export default class PositionsList extends Component {
  constructor() {
    super()
    this.state = {
      positions: []
    }
  }

  componentDidMount() {
    this.setState({ positions: routesData.postions })
  }

  positionLink(position) {
    return (
      <li key={position.id}>
        <Draggable draggableId={position.id}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <h3>
                <Link to={`/positions/${position.id}`}>{position.name}</Link>
              </h3>
            </div>
          )}
        </Draggable>
      </li>
    )
  }

  positionList() {
    return this.state.positions.map(position => this.positionLink(position))
  }

  render() {
    return <div>
      <ul>{this.positionList()}</ul>
        <Route
          path={`/positions/:positionId`}
          render={props => <Position {...props} data={this.state.positions} />}
        />
        <Route exact path={`/positions`} component={PositionsList} />
      </div>
  }
}
