import React, { Component } from "react"
import "./Position.css"

export default class Position extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const position = this.props.positions.find(p => p.id == this.props.match.params.positionId)
    let positionData = <div>
      <h3>Position not found</h3>
    </div>

    if (position) {
      positionData = <div>
          <h3>{position.name}</h3>
          <img alt="yum" src={position.image} />
        </div>
    }

    return <div>{positionData}</div>
  }
}