import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { apiKey } from "../config";

const mapStyles = {
    width: '100%',
    height: '500px'
};

export const MapContainer = props => {
    return (
        <Map
            google={props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{
                lat: `${props.lat}`,
                lng: `${props.lng}`
            }}>
            <Marker position={{ lat: props.lat, lng: props.lng }} />
        </Map>
    );
}


export default GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer);
