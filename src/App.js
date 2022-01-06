import React from "react";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";



import { useState } from "react";
import { Movielist } from "./components/Movielist";
import { Addmovie } from "./components/Addmovie";
import { Notfound } from "./components/Notfound";
import { Moviedetails } from "./components/Moviedetails";
import { Editmovie } from "./components/Editmovie";


function App() {
  
  const history = useHistory();
  const [mode, setmode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          
           <AppBar position="sticky">
            <Toolbar>
              <Button variant="primary" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/movies")}
              >
                Movies
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/addmovie")}
              >
                Add Movie
              </Button>
              <Button
                variant="text"
                color="inherit"
                style={{ marginLeft: "auto" }}
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar> 
          </AppBar>

          <Switch>
            <Route exact path="/"></Route>
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
              <Moviedetails  />
            </Route>
            <Route>
              <Movielist  />
            </Route>
            <Route path="**">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}



export default App;
