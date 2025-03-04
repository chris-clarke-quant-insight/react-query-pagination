import React, { useState, useEffect } from "react";

import Aside from "../../components/Aside";
import Layout from "../../components/Layout";
import Sort from "../../components/Sort";
import Search from "../../components/Search";
import TopSearch from "../../components/TopSearch";
import OnlyModelList from "../../components/only/OnlyModelList";

import { ListButton } from "../../components/ListButton";

function OnlyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('name');
  const [data, setData] = useState({});

  useEffect(() => {
    function fetchData() {
      try {
        const res = fetch(
            `/api/users`
        ).then((response) =>{
          const newData = response.json();
          newData.then((data) => setData(data));
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function handleChange(ev) {
    setSearchTerm(ev.target.value.toUpperCase());
  }
  function handleSort(ev){
    setSort(ev.target.value);
  }
  return (<Layout
    location="team"
    search={<TopSearch handleChange={handleChange}/>}
    aside={<><Aside />
    <div className='grid-container'>
      <Search handleChange={handleChange} />
    </div>
    <div className='grid-container'>
      <Sort handleChange={handleSort} value={sort} />
    </div></>}>
      <div>
        <h1>Casual Card list of models{searchTerm ? ` for ${searchTerm}` : ''}
        </h1>
        <div>
            This is the Only section which is used for experiments
        </div>
        <div className="result-box">
            {data? <OnlyModelList models={data} />: "Loading..."}
          </div>
        </div>
    </Layout>
  );
}
// Fix Sort 
export default OnlyPage;
