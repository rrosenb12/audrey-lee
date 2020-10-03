import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import Publications from "./Publications";
import Media from "./Media";
import Videos from "./Videos";
import Interviews from "./Interviews";
import ProbablyAngels from "./ProbablyAngels";
import Awards from "./Awards";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/publications" component={Publications} />
      <Route exact path="/media" component={Media} />
      <Route exact path="/media/videos" component={Videos} />
      <Route exact path="/media/interviews" component={Interviews} />
      <Route exact path="/probably-angels" component={ProbablyAngels} />
      <Route exact path="/awards" component={Awards} />
    </BrowserRouter>
  );
}

export default App;
