import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapContainer from './Map.js'
 
export default class Store extends Component {

  render () {
    return (
       <div>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          <div className="avatar-section">
            <img src="q.svg" className="img-rounded avatar" id="avatar-image" alt=""/>
            </div>
          <h1>Store</h1>
           <p>Welcome to Costco!</p>
           
          <Link to='/Store/Queue'>
          <button
            className="btn btn-primary btn-lg"
            
          >
            View Costco's Queue
          </button>
          </Link>
          <Link to=''>
            <button
                className="btn btn-primary btn-lg"
            >
                Back
            </button>
            </Link>
          <div>
          <MapContainer />
        </div>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
       </div>
    );
  }
}