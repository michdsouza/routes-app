import React, { Component } from "react";
import Position from "./Position";
import { Link, Route } from "react-router-dom";
import "./Position.css";

export default class PositionsList extends Component {
  constructor() {
    super()
    this.state = {
      positions: []
    }
  }

  loadPositions() {
    const data = require('../data/routesData.json')
    this.setState({
      positions: data.map(position => this.positionMapper(position))
    })
  }

  componentDidMount() {
    this.loadPositions()
  }

  positionMapper(position) {
    return {
      id: position.id,
      name: position.name,
      order: position.order,
      image: position.image
    }
  }

  positionLink(position) {
    return <li key={position.id}>
      <img src={position.image} alt='yum' />
      <h3><Link to={`/positions/${position.id}`}>{position.name}</Link></h3>
      <p>ID: {position.id} & Order: {position.order}</p>
      </li>;
  }

  positionList() {
    return <ul>
      {this.state.positions.map(position =>
        this.positionLink(position)
      )}
    </ul>
  }

  render() {
    return <div>
        {this.positionList()}
        <Route path={`/positions/:positionId`} render={props => <Position {...props} data={this.state.positions} />} />
        <Route exact path={`/positions`} component={PositionsList} />
      </div>;
  }
}
