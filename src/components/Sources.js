import React, { Component } from 'react'
import './Sources.css'
import { FaFlag } from 'react-icons/fa'

export default class Sources extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sources: []
    }
  }

  sourceTable = sources => (
    <table>
      <tbody>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th />
        </tr>
        {sources.map(source => (
          <tr key={source.number}>
            <td>{source.number}</td>
            <td>{source.name}</td>
            <td><FaFlag className={source.flagged ? 'flag-on' : 'flag-off'} onClick={() => this.changeColor(source)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  changeColor = (source) => {
    let sources = this.state.sources
    const index = sources.findIndex(s => s.number === source.number)
    sources[index].flagged = !source.flagged
    this.setState({sources: sources})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sources: nextProps.sources })
  }

  render() {
    return <div>{this.sourceTable(this.state.sources)}</div>
  }
}

