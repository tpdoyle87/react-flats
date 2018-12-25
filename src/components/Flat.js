import React from 'react'

import '../styles/cards.scss'

class Flat extends React.Component {

  handleClick = () => {
    this.props.selectFlat(this.props.flat)
  }

  render() {
  return (
    <div
      onClick={this.handleClick}
      className="card"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`}}
    >
      <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
      <div className="card-description">
        <h2>{this.props.flat.description}</h2>
      </div>
    </div>
    )
  }
}
export default Flat
