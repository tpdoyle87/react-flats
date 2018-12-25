import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const GOOGLE_API_KEY = "AIzaSyCrCijfhqhwAd8G-izYH1uWVP2KMy4tS5I"


const AnyReactComponent = ({ text }) => <div className="marker"><div className="dot"></div><div className="pulse"></div></div>;
class Map extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          center={[this.props.selectedFlat.lat, this.props.selectedFlat.lng]}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
