import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Css files
import "./App.css";
// Components
import Search from "./Components/Search";
// Pages
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Router>
        {/* <li>
          <Link to="/search">Search</Link>
        </li> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
      {/* <> */}

      {/* <Search/> */}
    </>
  );
};

export default App;
