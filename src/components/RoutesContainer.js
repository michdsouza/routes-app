import React, { Component } from 'react'
import './Routes.css'
import PositionsList from './PositionsList'

export default class RoutesContainer extends Component {
  render() {
    return <div>
        <header className="Routes-header">Route A</header>
        <PositionsList />
      </div>;
  }
}
