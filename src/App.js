import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <div className="apps">
        <div className="app">
          <Header />
          <Hero />
          <Main />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
