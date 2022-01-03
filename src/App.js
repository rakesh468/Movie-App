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
import { Movielist } from "./Movielist";
import { Addmovie } from "./Addmovie";
import { Notfound } from "./Notfound";
import { Moviedetails } from "./Moviedetails";
import { Editmovie } from "./Editmovie";


function App() {
  const history = useHistory();
  const [mode, setmode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const INITIAL_MOVIE = [
    {
      name: "Ratatouille",
      rating: 8,
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
    {
      name: "Interstellar",
      rating: 7.5,
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      name: "Avenger ",
      rating: 8.2,
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0%2C0%2C540%2C810",
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      name: "Thor: Ragnarok",
      rating: 8.6,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      summary:
        "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
      trailer: "https://www.youtube.com/embed/ue80QwXMRHg",
    },
    {
      name: "The City of Gold ",
      rating: 8.9,
      poster:
        "https://qqcdnpictest.mxplay.com/pic/c7d1ca32774fb050286ef81dfab6653b/en/2x3/320x480/6da7688e8a6a1126af7c65e2ff4b4434_1280x1920.webp",
      summary:
        "Filmmaker Laura Gabbert follows Pulitzer Prize-winning food critic Jonathan Gold as he explores the culinary culture of Los Angeles.",
      trailer: "https://www.youtube.com/embed/n7VXSfdT4Pw",
    },
    {
      name: "Aladdin 2019",
      rating: 7.2,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg",
      summary:
        "Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.",
      trailer: "https://www.youtube.com/embed/JcMtWwiyzpU",
    },
    {
      name: "Avatar",
      rating: 7.8,
      poster: "https://i.redd.it/16887vf4r7g31.jpg",
      summary:
        "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    },
    {
      name: "Spide Man No Way Home",
      rating: 8.9,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
      summary:
        "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
    },
    {
      name: "Joker",
      rating: 9,
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTcvL4wc0fbBjm1h5CRiFEZ2TnNKtu8KtoPSxTsj6mkedHeWl",
      summary:
        "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    },
  ];
  const [movies, setmovies] = useState(INITIAL_MOVIE);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          
           <AppBar position="static">
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
              <Addmovie movies={movies} setmovies={setmovies} />
            </Route>
            <Route path="/movie/edit/:id">
              <Editmovie movies={movies} setmovies={setmovies} />
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies/:id">
              <Moviedetails movies={movies} />
            </Route>
            <Route>
              <Movielist movies={movies} setmovies={setmovies} />
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
