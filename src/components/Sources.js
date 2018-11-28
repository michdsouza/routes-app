import React, { Component } from 'react'
import './Sources.css'
import { FaFlag } from 'react-icons/fa'
import { Button } from 'reactstrap'
import Editable from 'react-x-editable'

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
          <th>Flag</th>
          <th></th>
        </tr>
        {sources.map(source => (
          <tr key={source.number}>
            <td>{source.number}</td>
            <td><Editable
              name={source.name}
              value={source.name}
              dataType='text'
              mode='inline'
            /></td>
            <td><FaFlag className={source.flagged ? 'flag-on' : 'flag-off'} onClick={() => this.changeColor(source)} /></td>
            <td><Button color='danger' size='sm' onClick={() => this.deleteSource(source)}>Delete</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  changeColor = source => {
    let sources = this.state.sources
    const foundIndex = sources.findIndex(s => s.number === source.number)
    sources[foundIndex].flagged = !source.flagged
    this.setState({sources: sources})
  }

  deleteSource = source => {
    let sources = this.state.sources
    const foundIndex = sources.findIndex(s => s.number === source.number)
    sources.splice(foundIndex, 1)
    this.setState({sources: sources})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sources: nextProps.sources })
  }

  render() {
    return <div>{this.sourceTable(this.state.sources)}</div>
  }
}

