import React from 'react'

import Flat from './Flat'

const CityList = (props) => <div className="flat-list">{props.flats.map((flat) => <Flat  selectFlat={props.selectFlat} key={flat.lat} flat={flat} />)}</div>

export default CityList
