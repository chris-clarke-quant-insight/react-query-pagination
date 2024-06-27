import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import Aside from "../components/Aside";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Sort, { sortId, sortLocation, sortName, sortSpecies } from "../components/Sort";
import Search from "../components/Search";
import TopSearch from "../components/TopSearch";

function InfiniteCSRPage() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('name');

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}`
      ).then((result) => result.json()),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) {
          return pages.length + 1;
        }
      },
    }
  );
  function handleChange(e) {
    setSearchTerm(e.target.value.toUpperCase());
  }
  function handleSort(e){
    setSort(e.target.value);
  }
  return (<Layout search={<TopSearch handleChange={handleChange}/>}  aside={<><Aside />
  <div className='grid-container'>
  <Search handleChange={handleChange} />
</div>
<div className='grid-container'>
  <Sort handleChange={handleSort} value={sort} />
</div></>}>
    <div>
      <h1>
        Rick and Morty with React Query and Infinite Scroll - Client Side
        Rendered
      </h1>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          
          <div className='grid-container'>
            {data?.pages.map((page) => (
              <>
                {page.results.filter(c => c.name.toUpperCase().indexOf(searchTerm)>-1).sort((a, b) => {
          switch(sort) {
            case 'name':
              return sortName(a,b); 
              break;
            case 'location':
              return sortLocation(a,b); // a.location.name > b.location.name;
              break;
            case 'species':
              return sortSpecies(a,b); // a.species > b.species;
              break;
            default:
              return sortId(a,b); // a.id < b.id = -1 | b.id > a.id = 1 | a.id === b.id = 0;
          }
        }).map((character) => (
                  <Card key={character.id} character={character} />
                ))}
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div></Layout>
  );
}

export default InfiniteCSRPage;
