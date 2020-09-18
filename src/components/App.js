import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import Publications from "./Publications"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exct path="/publications" component={Publications}/>
    </BrowserRouter>
  );
}

export default App;
