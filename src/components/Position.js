import React, { Component } from 'react'
import './Position.css'

const positionNotFound = <div>
  <h3>Position not found</h3>
</div>

const positionFound = position => (
  <div>
    <h3>{position.name}</h3>
    <canvas
      ref="canvas"
      width={position.image_width}
      height={position.image_height}
    />
    <img ref="image" alt="yum" src={position.image} className="hidden" />
  </div>
)

export default class Position extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    const position = this.props.positions.find(p => p.id == this.props.match.params.positionId)

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.fillStyle = 'red'
      ctx.font = "20px Helvetica"
      position.sources.map((source) =>
        this.drawSource(source, ctx)
      )
    }
  }

  drawSource(source, ctx) {
    ctx.fillRect(source.x, source.y, 5, 5)
    let sourceText = '#' + source.number + ' '  + source.name
    ctx.fillText(sourceText, source.x + 8, source.y + 5)
  }

  render() {
    const position = this.props.positions.find(p => p.id == this.props.match.params.positionId)
    let positionData = position ? positionFound(position) : positionNotFound

    return <div>{positionData}</div>
  }
}