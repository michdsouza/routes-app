import React, { Component } from "react"
import "./Position.css"

export default class Position extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const position = this.props.data.find(p => p.id == this.props.match.params.positionId)
    let positionData = <div className="left">
      <h3>Position not found</h3>
    </div>

    if (position) {
      positionData = <div className="left">
        <h3>Position Details</h3>
        <p>Id: {position.id}</p>
        <p>Name: {position.name}</p>
        <p>Order: {position.order}</p>
        <img alt="yum" src={position.image} />
      </div>
    }

    return <div>{positionData}</div>
  }
}