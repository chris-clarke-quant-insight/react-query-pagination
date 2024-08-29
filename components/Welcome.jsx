
import React from "react";
import Link from "next/link";

export default function Welcome (props) {
    return <div id='welcome'>
    <h1>Explore how I implemented pagination:</h1>
    <h2>Client side pagination:</h2>
    <a href='https://dev.to/elisabethleonhardt/implementing-pagination-with-nextjs-mui-and-react-query-2ab'>
      Read the Article
    </a>
    <Link href='/rickandmorty/paginationCSR'>
      <a>See it working</a>
    </Link>{" "}
    <a href='https://github.com/elisabeth-leonhardt/react-query-pagination/tree/main/pages'>
      See the code
    </a>
    <h2>Server side pagination:</h2>
    <a href='https://dev.to/elisabethleonhardt/'>Read the Article</a>
    <Link href='/rickandmorty/paginationSSR'>
      <a>See it working</a>
    </Link>{" "}
    <a href='https://github.com/elisabeth-leonhardt/react-query-pagination/tree/main/pages'>
      See the code
    </a>
    <h1>Explore how I implemented an infinite scroll:</h1>
    <a href='https://dev.to/elisabethleonhardt/easy-and-quick-infinite-scroll-with-nextjs-and-react-query-36lh'>
      Read the Article
    </a>
    <Link href='/rickandmorty/infiniteCSR'>
      <a>See it working</a>
    </Link>{" "}
    <a href='https://github.com/elisabeth-leonhardt/react-query-pagination/tree/main/pages'>
      See the code
    </a>
  </div>
  
  }
  