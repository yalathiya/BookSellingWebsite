import React from "react";
import Home from "./pages/Home";
import About from "./component/About";
import Counter from "./component/Counter.js";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Counter /> */}
        <button
          onClick={() => {
            return <Home />;
          }}
        >
          Home Page
        </button>
        <button
          onClick={() => {
            return <About />;
          }}
        >
          About Page
        </button>
        {/* <Home /> */}
        {/* <About /> */}
      </>
    );
  }
}

export default App;
