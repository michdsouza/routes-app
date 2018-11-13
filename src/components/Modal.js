import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
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
    return <div className={this.props.show ? 'modal display-block' : 'modal display-none'}>
        <section className='modal-main' style={this.divPosition()}>
          {this.props.children}
        </section>
      </div>
  }
}