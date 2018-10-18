import React, { Component } from "react"
import Position from "./Position"
import { Link, Route } from "react-router-dom"
import "./Position.css"
import routesData from "../data/routesData"

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
    return <li key={position.id}>
      <img src={position.image} alt='yum' />
      <h3><Link to={`/positions/${position.id}`}>{position.name}</Link></h3>
      <p>ID: {position.id} & Order: {position.order}</p>
      </li>
  }

  positionList() {
    return this.state.positions.map(position => this.positionLink(position))
  }

  render() {
    return <div>
      <ul>{this.positionList()}</ul>
        <Route path={`/positions/:positionId`} render={props => <Position {...props} data={this.state.positions} />} />
        <Route exact path={`/positions`} component={PositionsList} />
      </div>
  }
}
