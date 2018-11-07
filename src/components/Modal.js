import React, { Component } from "react"

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className={this.props.show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          {this.props.children}
          <button onClick={this.props.handleClose} className="btn-cancel">
            Cancel
          </button>
          <button onClick={this.props.handleSave} className="btn-save">
            Save
          </button>
        </section>
      </div>
  }
}