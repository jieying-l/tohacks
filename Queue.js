import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Store from './Store.js';

const textStyle = {
    fontSize: 20
}
const leftAlready = <h1 style={textStyle}>You already left the queue!</h1>
const joinedAlready = <h1 style={textStyle}>You already joined the queue!</h1>

export default class Queue extends Component {
    constructor(props) {
        super(props);
        this.enqueue = this.enqueue.bind(this);
        this.dequeue = this.dequeue.bind(this);
        this.state = { quantity: 1,
                        leftqueue: false, 
                        joinedqueue: false};
    }
    
    enqueue(props, state) { //increments queue number
        if (this.state.leftqueue == true) {
            return; //if the person has already left the queue, display a message indicating an error (display message leftAlready)
        } else {
            this.setState((state) => {
                return {quantity: state.quantity + 1,
                        leftqueue: true,
                        joinedqueue: false
                }
            });
        }   
    }

    dequeue(props, state) { //increments queue number
        if (this.state.joinedqueue == true) {
            return; //if the person has already joined the queue, display a message indicating an error (display message joinedAlready)
        } else {
            this.setState((state) => {
                return {quantity: state.quantity - 1,
                        leftqueue: false,
                        joinedqueue: true
                }
            });
        }   
    }

    render () {
        return (
        <div>
            <h1>Costco Queue</h1>
            <p>{this.state.quantity}</p>
                <Link to='/Store'>
            <button
                className="btn btn-primary btn-lg"
            >
                Stores
            </button>
            </Link>
            <button className="btn btn-primary btn-lg"
                    onClick={this.enqueue} //calls this.enqueue
            > 
                Add to Queue
            </button>
            <button className="btn btn-primary btn-lg"
                    onClick={this.dequeue} //calls this.dequeue
            >
                Leave Queue
            </button>
            
        </div>
        );
    }
}