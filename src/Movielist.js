import React from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useHistory } from "react-router-dom";

export function Movielist({ movies, setmovies }) {
  const history=useHistory();
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, summary, rating, trailer }, index) => (
        <Movie
          name={name}
          poster={poster}
          trailer={trailer}
          summary={summary}
          rating={rating}
          key={index}
          id={index}
         
          deletebutton={
            <IconButton style={{marginLeft:"auto"}}
            onClick={()=>{
            const deleteidx=index;
            const remaingmovies=movies.filter((mv,idx)=>idx!==deleteidx)
            setmovies(remaingmovies)}}
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
              onClick={() => history.push("/movie/edit/"+index)}
            >
              <ModeEditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
