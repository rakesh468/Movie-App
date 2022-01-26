import React from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import {useFormik} from "formik";
import { formvalidationSchema } from "./Addmovie";

const API_URL = "https://movies-app-backendcode.herokuapp.com";

export function Editmovie() {
  const { id } = useParams();

  const [movie, setmovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setmovie(mvs));
  }, [id]);

  return movie ? <Updatemovie movie={movie} /> : "";
}

function Updatemovie({ movie }) {
  const history = useHistory();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
  useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: formvalidationSchema,
    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editmovie(updatedMovie);
    },
  });
  const editmovie = (updatedMovie) => {
    
    console.log(updatedMovie);
    fetch(`${API_URL}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
    
  };
  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <TextField
        id="name"
        name="name"
        variant="standard"
        value={values.name}
        onChange={handleChange}
        label="Enter movie Name"
        onBlur={handleBlur}
        error={errors.name && touched.name}
      />
      {errors.name && touched.name && errors.name}
      <TextField
        id="poster"
        name="poster"
        variant="standard"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.poster && touched.poster}
        label="Enter poster URL"
      />
      {errors.poster && touched.poster && errors.poster}
      <TextField
        name="trailer"
        id="trailer"
        variant="standard"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Enter Trailer URL"
        error={errors.trailer && touched.trailer}
      />
      {errors.trailer && touched.trailer && errors.trailer}
      <TextField
        id="rating"
        name="rating"
        variant="standard"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Enter Rating"
        error={errors.rating && touched.rating}
      />
      {errors.rating && touched.rating && errors.rating}
      <TextField
        id="summary"
        name="summary"
        variant="standard"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Enter summary"
        error={errors.summary && touched.summary}
      />
      {errors.summary && touched.summary && errors.summary}
      <Button type="submit" variant="contained" color="success">
        Save
      </Button>
    </form>
  );
}
