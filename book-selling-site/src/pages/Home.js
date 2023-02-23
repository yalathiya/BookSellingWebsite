import React from "react";
import { Component } from "react";
import Title from "../component/Title.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Book Selling Website",
      description: "You can sell as well as buy books on this website",
    };
  }
  render() {
    return (
      <>
        <Title value={this.state.title} />
        <Title value={this.state.description} />
        {/* <Title value="LastName" /> */}
      </>
    );
  }
}

export default Home;
