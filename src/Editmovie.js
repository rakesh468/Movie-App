import React from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export function Editmovie({ movies, setmovies }) {
  const history = useHistory();
  const { id } = useParams();
  const movie = movies[id];
  console.log(movie);
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
      trailer
    };
    console.log(updatemovielist);
    const copymovielist = [...movies];
    copymovielist[id] = updatemovielist;
    setmovies(copymovielist);
    history.push("/movies");
  };


  return (
    <div className="movie-form">
      <TextField variant="standard" value={name} onChange={(event) => setname(event.target.value)} label="Enter movie Name" />
      <TextField variant="standard" value={poster} onChange={(event) => setposter(event.target.value)} label="Enter poster URL" />
      <TextField variant="standard" value={trailer} onChange={(event) => settrailer(event.target.value)} label="Enter Trailer URL" />
      <TextField variant="standard" value={rating} onChange={(event) => setrating(event.target.value)} label="Enter Rating" />
      <TextField variant="standard" value={summary} onChange={(event) => setsummary(event.target.value)} label="Enter summary" />
      <Button variant="outlined" onClick={editmovie}>Save</Button>
    </div>
  );
}
