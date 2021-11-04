import React from "react";
import ReactDOM from "react-dom";

const mapStyles = {
  map: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};

export class CurrentLocation extends React.Component {
  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.state.google) {
      this.loadMap();
    }
    if (prevProps.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;

    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng,
      },
    };
  }
}

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 6.4478,
    lng: 3.469,
  },
  centerAroundCurrentLocation: false,
  visible: true,
};

export default CurrentLocation;
