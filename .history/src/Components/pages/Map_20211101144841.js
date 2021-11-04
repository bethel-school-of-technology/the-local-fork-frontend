import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}


export default function App () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyDZxLM9qBogixwiW2wuYWGqT2bUVWj5KEQ"
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return <div>
        <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
    </div>

}