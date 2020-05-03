import React, { Component } from 'react';

export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="panel-landing" id="section-1">
        <img className="logo" img src="q.svg" alt="" width="250"></img>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>

        <p>
        </p>
      </div>
    );
  }
}
