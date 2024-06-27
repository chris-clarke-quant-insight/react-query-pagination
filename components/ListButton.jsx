import React from "react";
import Link from "next/link";
import { Button, FormControl } from "@material-ui/core";

export function ListButton(props) {
  return (<li className="list-buttons">
    <FormControl fullWidth margin="normal">
      <Link href={props.href}>
        <Button variant={props.variant || "contained"} color={props.color || "primary"}>{props.title}</Button>
      </Link>
    </FormControl>
  </li>);
}
