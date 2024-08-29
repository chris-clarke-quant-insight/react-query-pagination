import React from "react";
import { LinkListButton } from "./LinkButton";

export default function Aside (props) {
  return (<ul>
          <LinkListButton href='/' variant="contained" color="primary" title="Home" />
          <LinkListButton href='/rickandmorty/paginationCSR' variant="contained" color="primary" title="Pagination Client Side" />
          <LinkListButton href='/rickandmorty/paginationSSR' variant="contained" title="Pagination Server Side" />
          <LinkListButton href='/rickandmorty/infiniteCSR' variant="contained" color="secondary" title='Infinite Here' />
          <LinkListButton href='/casual' variant="contained" color="secondary" title='Casual' />
          <LinkListButton href='/derp' variant="contained" color="secondary" title='Derp' />
        </ul>)
}
