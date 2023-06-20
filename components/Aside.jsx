import React from "react";
import Link from "next/link";
import { Button, FormControl } from "@material-ui/core";

function ListButton (props) {
  return (<li className="list-buttons">
  <FormControl fullWidth margin="normal">
    <Link href={props.href}>
      <Button variant={props.variant || "contained"} color={props.color || "primary"}>{props.title}</Button>
    </Link>
  </FormControl>
</li>)
}

export default function Aside (props) {
  return (<ul>
          <ListButton href='/' variant="contained" color="primary" title="Home" />
          <ListButton href='/paginationCSR' variant="contained" color="primary" title="Pagination Client Side" />
          <ListButton href='/paginationSSR' variant="contained" title="Pagination Server Side" />
          <ListButton href='/infiniteCSR' variant="contained" color="secondary" title='Infinite Here' />
          <ListButton href='/casual' variant="contained" color="secondary" title='Casual' />
        </ul>)
}
