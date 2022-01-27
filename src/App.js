import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



import { Navbar } from "./components/Navbar/Navbar";
import { Movielist } from "./components/Movielist";
import { Addmovie } from "./components/Addmovie";
import { Notfound } from "./components/Notfound";
import { Moviedetails } from "./components/Moviedetails";
import { Editmovie } from "./components/Editmovie";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addmovie">
            <Addmovie />
          </Route>
          <Route path="/movie/edit/:id">
            <Editmovie />
          </Route>
          <Route path="/films">
            <Redirect to="/movies" />
          </Route>
          <Route path="/movies/:id">
            <Moviedetails />
          </Route>
          <Route>
            <Movielist />
          </Route>
          <Route path="***">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
