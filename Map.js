import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={14}>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCBSx2OWim81bEjserr-nkAhLJuHj18kjQ')
  })(MapContainer)