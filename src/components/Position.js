import React, { Component } from 'react'
import './Position.css'

const positionNotFound = <div>
  <h3>Position not found</h3>
</div>

const Modal = ({ handleClose, handleSave, show, children }) => {
  return <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose} className="btn-cancel">
          Cancel
        </button>
        <button onClick={handleSave} className="btn-save">
          Save
        </button>
      </section>
    </div>;
}

export default class Position extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {},
      canvas: {},
      show: false,
      coordinates: {},
      sourceName: ''
    }
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const img = this.refs.image
    const position = this.props.positions.find(p => p.id == this.props.match.params.positionId)
    this.setState({ position: position, canvas: canvas })

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.fillStyle = 'red'
      ctx.font = "20px Helvetica"
      position.sources.map((source) =>
        this.drawSource(source)
      )
    }
  }

  positionFound = position => (
    <div>
      <h3>{position.name}</h3>
      <canvas
        ref="canvas"
        width={position.image_width}
        height={position.image_height}
        onClick={this.imageClick}
      />
      <img
        ref="image"
        alt="yum"
        src={position.image}
        className="hidden"
      />
    </div>
  )

  showModal = (x, y) => {
    this.setState({ show: true, coordinates: {x: x, y: y} })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  imageClick = (event) => {
    this.showModal(event.nativeEvent.offsetX, event.nativeEvent.offsetY)
  }

  handleSave = () => {
    this.drawSource(this.addSource())
    this.setState({ show: false })
  }

  addSource() {
    const sourceName = this.state.sourceName
    let source = {}

    if(sourceName) {
      this.drawPoint()
      const sources = this.state.position.sources
      const sourceNumbers = sources.map(s => { return s.number })
      const maxNumber = Math.max(...sourceNumbers)

      source = {
        x: this.state.coordinates.x,
        y: this.state.coordinates.y,
        name: sourceName,
        number: maxNumber + 1
      }
      this.state.position.sources.push(source)
      this.setState({ sourceName: '' })
    }
    return source
  }

  drawPoint() {
    const ctx = this.state.canvas.getContext("2d")
    const coordinates = this.state.coordinates
    ctx.fillRect(coordinates.x, coordinates.y, 5, 5)
  }

  drawSource(source) {
    const ctx = this.state.canvas.getContext("2d");
    ctx.fillRect(source.x, source.y, 5, 5)
    let sourceText = '#' + source.number + ' '  + source.name
    ctx.fillText(sourceText, source.x + 8, source.y + 5)
  }

  updateSourceName = (event) => {
    this.setState({ sourceName: event.target.value })
  }

  render() {
    const position = this.state.position
    let positionData = position ? this.positionFound(position) : positionNotFound

    return <div>
        <Modal show={this.state.show} handleClose={this.hideModal} handleSave={this.handleSave}>
          <h4>Source Name</h4>
        <input type="text" value={this.state.sourceName} onChange={this.updateSourceName} className="txt-source" />
        </Modal>
        {positionData}
      </div>;
  }
}