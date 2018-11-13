import React, { Component } from 'react'
import './Popup.css'

export default class Popup extends Component {
  constructor(props) {
    super(props)
  }

  divPosition() {
    return {
      top: this.props.coordinates.y,
      left: this.props.coordinates.x
    }
  }

  render() {
    return <div className={this.props.show ? 'popup display-block' : 'popup display-none'}>
        <section className='popup-main' style={this.divPosition()}>
          {this.props.children}
        </section>
      </div>
  }
}