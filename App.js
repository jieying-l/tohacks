import React, { Component } from 'react';
import Profile from './Profile.js';
import Signin from './Signin.js';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })

export class App extends Component {


  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        </div>
        <Map google={this.props.google} zoom={14}>
        </Map>
      </div>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCBSx2OWim81bEjserr-nkAhLJuHj18kjQ')
})(App)