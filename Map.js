import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stores: [{latitude: 43.4723, longitude: -80.5449}]
        }
    }
    
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} draggable={true} position={{
           lat: store.latitude,
           lng: store.longitude,
         }}
         onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <div>
                <Map google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 43.4723, lng: -80.5449}}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCBSx2OWim81bEjserr-nkAhLJuHj18kjQ')
  })(MapContainer)