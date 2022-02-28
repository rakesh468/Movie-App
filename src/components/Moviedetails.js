import React from "react";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { BasicRating } from "./BasicRating";
import { useState, useEffect } from "react";

const API_URL = "https://movies-app-backendcode.herokuapp.com";

export function Moviedetails() {
  const history = useHistory();
  const { id } = useParams();

  const [movie, setmovie] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "GET",
      headers:{"X-auth-token":localStorage.getItem('token')}
    })
      .then((data) => data.json())
      .then((mvs) => setmovie(mvs));
  }, [id]);

  return (
    <div className="container">
      <iframe
        width="100%"
        height="600px"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="info-spec">
          <h6 className="movie-name">{movie.name}</h6>
          <p>
            <BasicRating />
          </p>
        </div>
        <p className="summary">{movie.summary}</p>
        <Button variant="contained" onClick={() => history.goBack("/movies")}>
          <KeyboardBackspaceIcon />
          Back
        </Button>
      </div>
    </div>
  );
}
