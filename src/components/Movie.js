import React from "react";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";

export function Movie({
  name,
  poster,
  summary,
  rating,
  id,
  deletebutton,
  editbutton,
}) {
  const history = useHistory();
  const [show, setshow] = useState(true);
  const stylesummary = {
    display: show ? "block" : "none",
  };
  const styles = { color: rating < 8 ? "crimson" : "green" };
  return (
    <Card className="main-container">
      <img
        src={poster}
        alt={name}
        className="image"
        onClick={() => history.push("/movies/" + id)}
      />
      <CardContent className="details">
        <div class="info-spec">
          <h6 className="movie-name">
            {name}
            <IconButton
              onClick={() => setshow(!show)}
              color="primary"
              aria-label="summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => history.push("/movies/" + id)}
              aria-label="info"
              color="primary"
            >
              <InfoIcon />
            </IconButton>
          </h6>
          <p style={styles}>⭐{rating}</p>
        </div>
        <p style={stylesummary} className="movie-summary">
          {summary}{" "}
        </p>
        <CardActions>
          <Counter />
          {deletebutton}
          {editbutton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
