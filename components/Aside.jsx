import React from "react";
import { ListButton } from "./ListButton";

export default function Aside (props) {
  return (<ul>
          <ListButton href='/' variant="contained" color="primary" title="Home" />
          <ListButton href='/paginationCSR' variant="contained" color="primary" title="Pagination Client Side" />
          <ListButton href='/paginationSSR' variant="contained" title="Pagination Server Side" />
          <ListButton href='/infiniteCSR' variant="contained" color="secondary" title='Infinite Here' />
          <ListButton href='/casual' variant="contained" color="secondary" title='Casual' />
          <ListButton href='/derp' variant="contained" color="secondary" title='Derp' />
        </ul>)
}
