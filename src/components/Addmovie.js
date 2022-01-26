import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export const formvalidationSchema = yup.object({
  name: yup.string().required("Name Required"),
  poster: yup.string().required("URL required"),
  rating: yup.number().min(0).max(10).required("Rating Required"),
  summary: yup.string().required("summary Required"),
  trailer: yup.string().required("URL Required"),
});

const API_URL = "https://movies-app-backendcode.herokuapp.com";

export function Addmovie() {
  const history = useHistory();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (newMovie) => {
        console.log("onsubmit", newMovie);
        addmovie(newMovie);
      },
    });
  const addmovie = (newMovie) => {
    console.log(newMovie);

    fetch(`${API_URL}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
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
      <Button type="submit" variant="contained">
        Add movie
      </Button>
    </form>
  );
}
