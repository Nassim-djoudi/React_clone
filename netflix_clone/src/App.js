import './App.css';
import React from "react";
import HomePage from "./pages/HomePage"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage"

function App() {
  const user=null;

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginPage/>
        ) : (
          <Routes>
            <Route exact path="/">
              <HomePage/>
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
