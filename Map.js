import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    margin: '10%',
    width: '80%',
    height: '90%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            stores: [{latitude: 43.4723, longitude: -80.5449}],
        };
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} draggable={true} position={{
           lat: store.latitude,
           lng: store.longitude,
         }}
         onClick={this.onMarkerClick} />
        })
    }

    myFunction() {
        const userInput = document.getElementById("mySearch").value;
        console.log(userInput)
      }
    render() {
        return (
            <div>
                <div>
                    <input name="mySearch" type='text' id="mySearch" placeholder='Search Places..'/>
                    <button onclick="myFunction()">Search</button>
                    
                </div>
                <Map google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 43.4723, lng: -80.5449}}
                >
                    {this.displayMarkers()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCBSx2OWim81bEjserr-nkAhLJuHj18kjQ')
  })(MapContainer)

