import React, { Component } from "react"
import "./Position.css"

const positionNotFound = <div>
  <h3>Position not found</h3>
</div>

const positionFound = position => (
  <div>
    <h3>{position.name}</h3>
    <img alt="yum" src={position.image} />
  </div>
)

export default class Position extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const position = this.props.positions.find(p => p.id == this.props.match.params.positionId)
    let positionData = position ? positionFound(position) : positionNotFound

    return <div>{positionData}</div>
  }
}