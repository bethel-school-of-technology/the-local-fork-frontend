import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

export default function App () {
    const {} = useLoadScript({
        googleMapsApiKey: "AIzaSyDZxLM9qBogixwiW2wuYWGqT2bUVWj5KEQ"
    })


    return <div>map</div>

}