import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "../services/mapStyles";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 6.524379,
  lng: 3.379206,
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true
}

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDZxLM9qBogixwiW2wuYWGqT2bUVWj5KEQ",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
}
