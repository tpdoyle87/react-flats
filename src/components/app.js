import React from 'react'
import Map from './Map'
import CityList from './CityList'

import '../styles/application.scss'
import flats from '../data/flats'

const GOOGLE_API_KEY = "AIzaSyCrCijfhqhwAd8G-izYH1uWVP2KMy4tS5I"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flats: [],
      selectedFlat: {}
    }
  }
  componentWillMount = () => {

    this.setState({
      flats: flats,
      selectedFlat: flats[1]
    })
  }
  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat})
  }

  render(){
  return (
  <div>
      <CityList selectFlat={this.selectFlat} flats={this.state.flats} />
      <Map
        selectedFlat={this.state.selectedFlat}
        flats={this.state.flats}
        GOOGLE_API_KEY={this.GOOGLE_API_KEY}
      />
  </div>
  )}
}

export default App
