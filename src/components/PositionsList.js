import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

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
    return (
      <li key={position.id}>
        <Link to={`/positions/${position.id}`}>{position.name}</Link>
      </li>
    )
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

const Position = ({ match, data }) => {
  const position = data.find(p => p.id == match.params.positionId)
  let positionData = <div>Position not found</div>

  if(position) {
    positionData = <div>
      <p>Id: {position.id}</p>
      <p>Name: {position.name}</p>
      <p>Order: {position.order}</p>
      <img alt="yum" src="position.image"></img>
    </div>
  }

  return <div>{positionData}</div>
}