import React from "react";
import { Button, FormControl } from "@material-ui/core";

export function ListButton(props) {
  return (<li className="list-buttons">
    <FormControl fullWidth margin="normal">
      <Button onClick={props.onClick} variant={props.variant || "contained"} color={props.color || "primary"}>{props.title}</Button>
    </FormControl>
  </li>);
}

