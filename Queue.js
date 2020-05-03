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
                        capacity: 200,
                        leftqueue: false, 
                        joinedqueue: false};
    }
    
    enqueue(props, state) { //increments queue number
        if (this.state.leftqueue == true) {
            window.alert("You have already joined the queue");
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
            window.alert("You have already left the queue");
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
            
            <h1>Costco (42 Overlea Blvd, Toronto, ON M4H 1B6) Queue</h1>
            <h4>Current Capacity       |       Current Queue</h4>
            <p className="number">{this.state.capacity} | {this.state.quantity}</p>
            <button className="btn btn-primary btn-are"
                    onClick={this.enqueue} //calls this.enqueue
            > 
                Join Queue
            </button>
            <button className="btn btn-primary btn-are"
                    onClick={this.dequeue} //calls this.dequeue
            >
                Leave Queue
            </button>
            <Link to='/Store'>
            <button
                className="btn btn-primary btn-lg"
            >
                Back
            </button>
            </Link>
        </div>
        );
    }
}
