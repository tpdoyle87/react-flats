import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCrCijfhqhwAd8G-izYH1uWVP2KMy4tS5I" }}
          defaultCenter={[this.props.flats[1].lat, this.props.flats[1].lng]}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent
            id="drop"
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lng}
            text="here"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
