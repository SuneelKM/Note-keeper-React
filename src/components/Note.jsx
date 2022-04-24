import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  const [strike, setStrike] = useState(false);
  function textStrike() {
    setStrike(!strike);
  }

  return (
    <div className="note">
      <h1
        onClick={textStrike}
        style={{ textDecoration: strike ? "line-through" : null }}
      >
        {props.title}
      </h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
