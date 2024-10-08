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
  const [models, setModels] = useState([]);
  const [data, setData] = useState({});
  const [saveList, setSaveList] = useState();

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
  function handleClear() {
    setModels([]);
  }
  function handleSaveList() {
    setSaveList(models);
  }
  function handleLoadList() {
    // get value of the text input to populate the list
    setModels(saveList);
  }
  function handleListChange (ev) {
    setSaveList(JSON.parse(ev.target.value));
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
        <ul className="grid-container">
          <ListButton variant="contained" color="secondary" onClick={handleClear} title="Clear Models" />
          <ListButton variant="contained" color="primary" onClick={handleSaveList} title="Save Models List" />
          <ListButton variant="contained" color="secondary" onClick={handleLoadList} title="Load Models List" />
        </ul>
        <div>This is the Only section which is used for experiments</div>
          <input
           onChange={handleListChange}
          type="text" defaultValue={JSON.stringify(saveList)} />
          <div className="result-box">
            {data? <OnlyModelList models={data} />: "Loading..."}
            {JSON.stringify(data)}
          </div>
        </div>
    </Layout>
  );
}
// Fix Sort 
export default OnlyPage;
