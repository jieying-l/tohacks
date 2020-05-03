import React, { Component } from 'react';
import MapContainer from './Map.js'
import {Link} from 'react-router-dom';
import {
  Person,
} from 'blockstack';

export default class Profile extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  person: {
  	  	name() {
          return 'Anonymous';
        },
  	  },
  	};
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    return (
      !userSession.isSignInPending() ?
      <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src="q.svg" className="img-rounded avatar" id="avatar-image" alt=""/>
        </div>
        <h2>Welcome to Q <span id="heading-name">{ person.name() ? person.name() : '!' }</span>!</h2>
        <p className="lead">
        <Link to='/Store'>
          <button
            className="btn btn-primary btn-lg"
          >
            Stores
          </button>
          </Link>
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={ handleSignOut.bind(this) }
          >
            Logout
          </button>
        </p>
        <div>
          <MapContainer />
        </div>
      </div> : null
    );
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
  }
} 
