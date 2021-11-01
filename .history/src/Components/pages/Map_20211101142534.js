import React from "react";
//import axios from "axios";
import {} from "google-map-react";
import {
  GoogleMapReact,
  withScriptjs,
  withGoogleMap,
} from "@googlemaps/react-wrapper";

function Map() {
  return (
    <GoogleMapReact
      defaultZoom={10}
      defaultCenter={{ lat: 6.524379, lng: 3.379206 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
