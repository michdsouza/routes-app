import React, { Component } from 'react'
import Popup from './Popup.js'
import './Position.css'
import Sources from './Sources.js';

const positionNotFound = <div>
  <h3>Position not found</h3>
</div>

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
      ctx.fillStyle = '#a10707'
      ctx.font = '20px Helvetica'
      position.sources.map((source) =>
        this.drawSource(source)
      )
    }

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.handleSave()
    })

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) this.hidePopup()
    })
  }

  positionFound = position => (
    <div>
      <h3>{position.name}</h3>
      <canvas
        ref='canvas'
        width={position.image_width}
        height={position.image_height}
        onClick={this.imageClick}
      />
      <img
        ref='image'
        alt='yum'
        src={position.image}
        className='hidden'
      />
    </div>
  )

  showPopup = () => {
    this.setState({ show: true })
  }

  hidePopup = () => {
    this.setState({ show: false })
  }

  imageClick = (event) => {
    this.setState({ coordinates: { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY } })
    this.showPopup()
  }

  handleSave = () => {
    this.drawSource(this.addSource())
    this.setState({ show: false })
  }

  updateSourceName = (event) => {
    this.setState({ sourceName: event.target.value })
  }

  getMaxSourceNumber() {
    const sourceNumbers = this.state.position.sources.map(s => { return s.number })
    return Math.max(...sourceNumbers)
  }

  addSource() {
    const sourceName = this.state.sourceName
    let source = {}

    if(sourceName) {
      this.drawPoint()
      const maxSourceNumber = this.getMaxSourceNumber()
      const coordinates = this.state.coordinates

      source = { x: coordinates.x, y: coordinates.y, name: sourceName, number: maxSourceNumber + 1 }
      this.state.position.sources.push(source)
      this.setState({ sourceName: '' })
    }
    return source
  }

  drawPoint() {
    const ctx = this.state.canvas.getContext('2d')
    const coordinates = this.state.coordinates
    ctx.fillRect(coordinates.x, coordinates.y, 5, 5)
  }

  drawSource(source) {
    const ctx = this.state.canvas.getContext('2d')
    ctx.fillRect(source.x, source.y, 5, 5)
    let sourceText = '#' + source.number + ' '  + source.name
    ctx.fillText(sourceText, source.x + 8, source.y + 5)
  }

  render() {
    const position = this.state.position
    let positionData = position ? this.positionFound(position) : positionNotFound

    return <div>
        <div>
          <Popup show={this.state.show} coordinates={this.state.coordinates} handleClose={this.hidePopup} handleSave={this.handleSave}>
            <input type="text" value={this.state.sourceName} onChange={this.updateSourceName} className="txt-source" placeholder="Name" />
          </Popup>
          {positionData}
        </div>
        <div>
          <Sources sources={position.sources} />
        </div>
      </div>
  }
}