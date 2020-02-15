import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clan from "./Components/Clan/Clan";
import User from "./Components/Clan/UserInfo/User";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/clan" component={Clan} />
      <Route exact path="/clan/member/:id" component={User} />
    </Router>
  );
}

export default App;
