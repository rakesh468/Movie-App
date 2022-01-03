import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {useHistory} from "react-router-dom"

export function Addmovie({ movies, setmovies }) {
  const history=useHistory();
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const[trailer,settrailer]=useState("");

  const addmovie = () => {
    const newmovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };
    console.log(newmovie);
    setmovies([...movies, newmovie]);
    history.push("/movies")
  };

  return (
    <div className="movie-form">
      <TextField variant="standard" value={name} onChange={(event) => setname(event.target.value)} label="Enter movie Name" />
      <TextField variant="standard" value={poster} onChange={(event) => setposter(event.target.value)} label="Enter poster URL" />
      <TextField variant="standard" value={trailer} onChange={(event)=>settrailer(event.target.value)} label="Enter Trailer URL"/>
      <TextField variant="standard" value={rating} onChange={(event) => setrating(event.target.value)} label="Enter Rating" />
      <TextField variant="standard" value={summary} onChange={(event) => setsummary(event.target.value)} label="Enter summary" />
      <Button variant="outlined" onClick={addmovie}>Add movie</Button>
    </div>
  );
}
