import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Geocode from "react-geocode";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from 'use-places-autocomplete'
// import {Combobox} from '@reach/combobox'
import mapStyles from "../services/mapStyles";
// import restaurants from "../services/restaurants.json";

const mapContainerStyle = {
  width: "100vw",
  height: "90vh",
};

const center = {
  lat: 46.595806,
  lng: -112.027031,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDZxLM9qBogixwiW2wuYWGqT2bUVWj5KEQ",
  });

  const Res = "http://localhost:5000/restaurant/";

  // function displayRestaurantAround(){
  //   return new Promise ((resolve, reject) => {
  //     this.service.nearbySearch({
  //       location: currentUserPosition,
  //       radius: 5000,
  //       types: [restaurant]
  //     }, (res)=>{
  //       resolve(res);
  //     })
  //   })
  // }

  const [allRests, setAllRests] = useState([]);
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  // console.log(lat)
  // console.log(long)

  // const points = [lat, long]
  const [selectedRes, setSelectedRes] = useState(null);
  //   console.log(allRests);

  useEffect(() => {
    axios.get(Res).then((response) => {
      console.log(response.data.restaurants);

      setAllRests(response.data.restaurants);
      // setLat(response.data.restaurants[0].coordinates[0]);
      // setLong(response.data.restaurants[0].coordinates[1]);

      // console.log(setLong);
      // console.log(response.data.restaurants.coordinates);
    });
  }, []);

  // const markerLoop = points.map((point, id)=> {
  //   return (
  //     // console.log(point)
  //   )
  // })

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <h1> The Local Fork </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onLoad={onMapLoad}
        //bounds
      >
        {allRests.map((res) => (
          <Marker
            key={res._id}
            position={{
              lat: res.coordinates[0],
              lng: res.coordinates[1],
            }}
            onClick={() => {
              setSelectedRes(res);
            }}
            icon={{
              url: "/fork-icom.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}
        {selectedRes && (
          <InfoWindow
            position={{
              lat: selectedRes.coordinates[0],
              lng: selectedRes.coordinates[1],
            }}
            onCloseClick={() => {
              setSelectedRes(null);
            }}
          >
            <div>
              <h2>{selectedRes.name}</h2>
              <h3>{selectedRes.location}</h3>
              <h3>Opening hours: {selectedRes.hours}</h3>
            </div>
          </InfoWindow>
        )}
        ;
      </GoogleMap>
    </div>
  );
}
