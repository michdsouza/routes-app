import React, { Component } from 'react'
import './Sources.css'

const sourceTable = sources => (
  <table>
    <tbody>
      <tr>
        <th>Number</th>
        <th>Name</th>
      </tr>
      {sources.map(source => (
        <tr key={source.number}>
          <td>{source.number}</td>
          <td>{source.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

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
    return <div>{sourceTable(this.state.sources)}</div>;
  }
}

