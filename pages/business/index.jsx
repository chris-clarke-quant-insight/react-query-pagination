import { useQuery } from "react-query";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Aside from "../../components/Aside";
import BusinessCard from "../../components/BusinessCard";
import Sort, { sortId, sortLocation, sortName, sortSpecies } from "../../components/Sort";
import Search from "../../components/Search";
import TopSearch from "../../components/TopSearch";

export default function PaginationPage(props) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('name');

  const { data } = useQuery(
    ["business", page],
    async () =>
      await fetch(
        `/api/business/?page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
    }
  );
  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`business/?page=${value}`, undefined, { shallow: true });
  }
  function handleChange(e) {
    setSearchTerm(e.target.value.toUpperCase());
  }
  function handleSort(e){
    setSort(e.target.value);
  }
  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page));
    }
  }, [router.query.page]);
  return (<Layout search={<TopSearch handleChange={handleChange}/>} aside={<><Aside />
  <div className='grid-container'>
  <Search handleChange={handleChange} />
</div>
<div className='grid-container'>
  <Sort handleChange={handleSort} value={sort} />
</div></>} pagination={<Pagination
    count={data?.info.pages}
    variant='outlined'
    color='primary'
    className='pagination'
    page={page}
    onChange={handlePaginationChange}
  />}>
    <div className="app-content">
      <h1>
        Start of the business listings here
      </h1>
      
    <div className="result-box">

      <div className='grid-container'>
        {data?.results?.filter(c => c.name.toUpperCase().indexOf(searchTerm)>-1).sort((a, b) => {
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
        }).map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div></div>
     
    </div></Layout>
  );
}
