import React, { useState, useEffect } from "react";

import Aside from "../../components/Aside";
import Layout from "../../components/Layout";
import Sort from "../../components/Sort";
import Search from "../../components/Search";
import TopSearch from "../../components/TopSearch";

import * as download from "../../data/pins";

function Pin(props){
    const url = (props.pin.images && props.pin.images['orig'])? props.pin.images['orig'].url : 'no orig';

   return (<div className="grid-container"><a href={url}><img src={url} /></a></div>)
}

function PinsList(props) {
    if (!props.pins['default']) {
        return <p>Loading...</p>;
    }

    return Object.keys(props.pins['default']).map(pin => <Pin key={pin} pin={props.pins['default'][pin]} />)
}

function PinsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('name');
  const [data, setData] = useState({});

  useEffect(() => {
    function fetchData() {
      try {
        // const res = fetch(
        //     `/api/users`
        // ).then((response) =>{
        //   const newData = response.json();
        //   newData.then((data) => setData(data));
        // });
        setData(download);
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
        <h1>Casual Card list of pins{searchTerm ? ` for ${searchTerm}` : ''}
        </h1>
        <div>
            This is the Only section which is used for experiments
        </div>
        <div className="result-box">
            {data? <PinsList pins={data} />: "Loading..."}
          </div>
        </div>
    </Layout>
  );
}
// Fix Sort 
export default PinsPage;
