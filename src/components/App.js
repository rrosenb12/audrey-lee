import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import Publications from "./Publications";
import Media from "./Media";
import Videos from "./Videos";
import Interviews from "./Interviews";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/publications" component={Publications} />
      <Route exact path="/media" component={Media} />
      <Route exact path="/media/videos" component={Videos} />
      <Route exact path="/media/interviews" component={Interviews}/>
    </BrowserRouter>
  );
}

export default App;
