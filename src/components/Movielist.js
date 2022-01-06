import React from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export function Movielist() {
  const [movies, setmovies] = useState([]);

  const getmovies = () => {
    fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setmovies(mv));
  };
  useEffect(getmovies, []);

  const deletemovie = (id) => {
    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getmovies());
  };
  const history = useHistory();
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, summary, rating, trailer, id }) => (
        <Movie
          name={name}
          poster={poster}
          trailer={trailer}
          summary={summary}
          rating={rating}
          key={id}
          id={id}
          deletebutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => deletemovie(id)}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              color="secondary"
              aria-label="Edit"
              onClick={() => history.push("/movie/edit/" + id)}
            >
              <ModeEditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
