import React from "react";
import Link from "next/link";
import { Button, FormControl } from "@material-ui/core";

export function LinkButton(props) {
  const {
    href,
    variant = "contained",
    color = "primary",
    title
  } = props;

  return (<FormControl fullWidth margin="normal">
      <Link href={href}>
        <Button variant={variant} color={color}>{title}</Button>
      </Link>
    </FormControl>);
}

export function LinkListButton(props) {
  const {
    href,
    variant = "contained",
    color = "primary",
    title
  } = props;

  return (<li className="list-buttons">
    <LinkButton href={href} variant={variant} color={color} title={title} />
  </li>);
}
