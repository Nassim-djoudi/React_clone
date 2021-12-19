import './App.css';
import React from "react";
import Row from "./Row.js";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>On va faire des bails cheucheus</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflix}/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
