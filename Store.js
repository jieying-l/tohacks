import React from 'react';
import {Link} from 'react-router-dom';
import Queue from './Queue.js';
 
const Store = () => {
    return (
       <div>
          <h1>Store</h1>
           <p>Store page body content</p>
           
          <Link to='/Store/Queue'>
          <button
            className="btn btn-primary btn-lg"
          >
            Add to Queue
          </button>
          </Link>
       </div>
    );
}
 
export default Store;