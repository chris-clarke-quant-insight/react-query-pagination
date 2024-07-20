import { useQuery } from "react-query";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import FullLayout from "../components/FullLayout";
import ModelsList from "../components/ModelsList";
import TopSearch from "../components/TopSearch";

export async function getServerSideProps(ctx) {
  return {
      props: {
          search: ctx.query.s ? ctx.query.s : '',
      }
  }
}

function Page(props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(props.search);
  const [filteredData, setFilteredData]= useState([]);
  
  const { data } = useQuery(
    ["models", searchTerm],
    async () =>
      await fetch(
        `/api/models/?s=${searchTerm}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    if(data && data.length >0) {
      setFilteredData(data.filter(item => item.id.toUpperCase().indexOf(searchTerm)>-1));
    }
  }, [searchTerm, data]);

  function handleSearchChange(e, value) {
    router.push(`?s=${value}`, undefined, { shallow: true });
  }
  function handleChange(e) {
    setSearchTerm(e.target.value.toUpperCase());
    setFilteredData(data.filter(item => item.id.toUpperCase().indexOf(searchTerm)>-1));
    handleSearchChange(e, e.target.value);
  }

  const Loading = () => { return "Loading..." };
  function Loaded () {
    return  (<FullLayout
      title={`Team : ${searchTerm}`}
      location="team"
      search={<TopSearch value={searchTerm} handleChange={handleChange}/>}
      results={<div>{data && filteredData.length} / {data.length}</div>}
    >
      <div className="result-box">
          {filteredData ? 
          <ModelsList models={filteredData} />
          : 
          "Loading..."
          }            
      </div>
    </FullLayout>);
  }

  return (<>{ data ? <Loaded /> : <Loading /> }</>);
}

export default Page;