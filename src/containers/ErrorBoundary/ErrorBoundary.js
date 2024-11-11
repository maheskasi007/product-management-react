import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // let's catch the error
  // when there is a runtime error -- this method would be called automatically
  // if received the error that was thrown as param
  // must return a value to update the state
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  // will be called only when a run time error occurs
  componentDidCatch(error, errorInfo) {
    console.log('==== Inside ComponentDidCatch ====');
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger">
          <p>Some Error occured! Try again later</p>
          <p>If the error persists, contact the Admin!</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
