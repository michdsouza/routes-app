import React, { Component } from "react"

export default class Sources extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sources: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sources: nextProps.sources })
  }

  render() {
    return <div>
      Number
      Name
      {this.state.sources.map(source => <div key={source.number}>{source.number}  {source.name}</div>)}
    </div>
  }
}

