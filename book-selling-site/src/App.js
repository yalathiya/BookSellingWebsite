import Home from "./pages/Home";
import Counter from "./component/Counter.js";
import { render } from "@testing-library/react";

function App() {
  return (
    <>
      <Home />
      <Counter />
    </>
  );
}

export default App;
