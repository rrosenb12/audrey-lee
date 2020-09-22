import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import Publications from "./Publications";
import Media from "./Media";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/publications" component={Publications} />
      <Route exact path="/media" component={Media} />
    </BrowserRouter>
  );
}

export default App;
