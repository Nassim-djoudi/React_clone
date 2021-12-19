import './App.css';
import React from "react";
import Row from "./Row.js";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Créons un Netflix Clone avec TmdbApi</h1>
      <Row title="Programmes originaux Netflix" isLargeRow fetchUrl={requests.fetchNetflix}/>
      <Row title="Tendances Actuelles" fetchUrl={requests.fetchTrending}/>
      <Row title="Les plus gros succès sur Netflix" fetchUrl={requests.fetchTopRated}/>
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Films romantiques" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
