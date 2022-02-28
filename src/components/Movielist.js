import React from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "https://movies-app-backendcode.herokuapp.com";

export function Movielist() {
  const [movies, setmovies] = useState([]);

  const getmovies = () => {
    fetch(`${API_URL}/movies`, {
      method: "GET",
      headers:{"X-auth-token":localStorage.getItem('token')}
    })
      .then((data) => data.json())
      .then((mv) => setmovies(mv));
  };
  useEffect(getmovies, []);

  const deletemovie = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
     method: "DELETE",
     headers:{"X-auth-token":localStorage.getItem('token')}
    }).then(() => getmovies());
  };
  const history = useHistory();
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, summary, rating, trailer, id,_id }) => (
        <Movie
          name={name}
          poster={poster}
          trailer={trailer}
          summary={summary}
          rating={rating}
          key={id}
          id={_id}
          deletebutton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => deletemovie(_id)}
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
              onClick={() => history.push("/movie/edit/" + _id)}
            >
              <ModeEditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
