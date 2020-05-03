import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Queue from './Queue.js';
 
export default class Store extends Component {

  render () {
    return (
       <div>
          <h1>Store</h1>
           <p>Welcome to Costco!</p>
           
          <Link to='/Store/Queue'>
          <button
            className="btn btn-primary btn-lg"
            
          >
            Visit Costco's Queue
          </button>
          </Link>
       </div>
    );
  }
}