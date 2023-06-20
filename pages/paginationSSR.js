import { useQuery, dehydrate, QueryClient } from "react-query";
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import Search from "../components/Search";
import Sort, { sortId, sortLocation, sortName, sortSpecies } from "../components/Sort";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Aside from "../components/Aside";
import TopSearch from "../components/TopSearch";

export default function PaginationSSR(props) {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('name');
  const [list, setList] = useState(props.list || []);

  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json()).then(data => {
        setList(data?.results?.filter(c => c.name.toUpperCase().indexOf(searchTerm)>-1).sort((a, b) => {
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
        }))
      }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`paginationSSR/?page=${value}`, undefined, { shallow: true });
  }
  function handleChange(e) {
    setSearchTerm(e.target.value.toUpperCase());
  }
  function handleSort(e){
    setSort(e.target.value);
  }
  function handleReverse(e) {
    setList(list.reverse());
  }

  return (<Layout search={<TopSearch handleChange={handleChange}/>} aside={<><Aside />
  <div className='grid-container'>
  <Search handleChange={handleChange} />
</div>
<div className='grid-container'>
  <Sort handleChange={handleSort} value={sort} />
</div>
<Button onClick={handleReverse}>Reverse</Button></>} pagination={<Pagination
    count={data?.info.pages}
    variant='outlined'
    color='primary'
    className='pagination'
    page={page}
    onChange={handlePaginationChange}
  />}>
    <div>
      <h1>
        Rick and Morty with React Query and Pagination - Server Side rendered
      </h1>
      <div className="result-box">

      <div className='grid-container'>
        {list?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
</div>
    </div></Layout>
  );
}

export async function getServerSideProps(context) {
  let page = 1;
  
  if (context.query.page) {
    page = parseInt(context.query.page);
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json())
  );
  return { props: { list: [], dehydratedState: dehydrate(queryClient) } };
}
