import React from "react";
import Home from "./pages/Home";
import About from "./component/About";
import Counter from "./component/Counter.js";
import { render } from "@testing-library/react";
import Title from "./component/Title";
import List from "./component/List.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
    };
  }
  toggleShowHome = () => {
    this.setState({ showHome: !this.state.showHome });
  };
  render() {
    return (
      <>
        {/* <Counter /> */}
        <List />;
        <button onClick={this.toggleShowHome}>
          {this.state.showHome ? "Home" : "About"}
        </button>
        {this.state.showHome ? <Home /> : <About />}
      </>
    );
  }
}

export default App;
