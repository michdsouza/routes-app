import React, { Component } from "react"
import "./Position.css"

export default class Position extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const position = this.props.data.find(p => p.id == this.props.match.params.positionId)
    let positionData = <div>
      <h3>Position not found</h3>
    </div>

    if (position) {
      positionData = <div>
          <h3>Position Details</h3>
          <img alt="yum" src={position.image} />
          <p><b>Id:</b> {position.id}</p>
          <p><b>Name:</b> {position.name}</p>
          <p><b>Order:</b> {position.order}</p>
        </div>;
    }

    return <div>{positionData}</div>
  }
}