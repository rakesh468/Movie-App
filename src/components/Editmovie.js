import React from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export function Editmovie() {
  const { id } = useParams();

  const [movie, setmovie] = useState(null);

  useEffect(() => {
    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setmovie(mvs));
  }, [id]);

  return movie ? <Updatemovie movie={movie} /> : "";
}

function Updatemovie({ movie }) {
  const history = useHistory();
  const [name, setname] = useState(movie.name);
  const [poster, setposter] = useState(movie.poster);
  const [rating, setrating] = useState(movie.rating);
  const [summary, setsummary] = useState(movie.summary);
  const [trailer, settrailer] = useState(movie.trailer);
  const editmovie = () => {
    const updatemovielist = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log(updatemovielist);
    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatemovielist),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
    // history.push("/movies");
  };
  return (
    <div className="movie-form">
      <TextField
        variant="standard"
        value={name}
        onChange={(event) => setname(event.target.value)}
        label="Enter movie Name"
      />
      <TextField
        variant="standard"
        value={poster}
        onChange={(event) => setposter(event.target.value)}
        label="Enter poster URL"
      />
      <TextField
        variant="standard"
        value={trailer}
        onChange={(event) => settrailer(event.target.value)}
        label="Enter Trailer URL"
      />
      <TextField
        variant="standard"
        value={rating}
        onChange={(event) => setrating(event.target.value)}
        label="Enter Rating"
      />
      <TextField
        variant="standard"
        value={summary}
        onChange={(event) => setsummary(event.target.value)}
        label="Enter summary"
      />
      <Button variant="outlined" onClick={editmovie}>
        Save
      </Button>
    </div>
  );
}
