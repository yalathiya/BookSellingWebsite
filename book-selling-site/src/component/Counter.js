import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="counter">Counter : {this.state.count}</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Counter
        </button>
      </>
    );
  }
}

export default Counter;
