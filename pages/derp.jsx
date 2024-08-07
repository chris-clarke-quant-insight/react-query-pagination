import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import Aside from "../components/Aside";
import Layout from "../components/Layout";
import Sort from "../components/Sort";
import Search from "../components/Search";
import TopSearch from "../components/TopSearch";
import DerpModelsList from "../components/DerpModelsList";
import User from "../components/User";

import { makeValue } from "../utils/makeValue";
import { makeUrl } from "../utils/makeUrl";
import { makeID } from "../utils/makeID";
import { makeSenses } from "../utils/makeSenses";

function derpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [name, setName] = useState("alice");
  const [sort, setSort] = useState('name');
  const [models, setModels] = useState([]);
  const [data, setData] = useState({});
  const [saveList, setSaveList] = useState();
  const [senses, setSenses] = useState(makeSenses());

  useEffect(() => {
    function fetchData() {
      try {
        const res = fetch(
            `/api/user/?name=${name}`
        ).then((response) =>{
          const newData = response.json();
          newData.then((data) => setData(data));
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [name]);

  function handleChange(ev) {
    setSearchTerm(ev.target.value.toUpperCase());
  }
  function handleSort(ev){
    setSort(ev.target.value);
  }
  function handleClick(){
    setModels([...models, {id: makeID(), value: makeValue(), url: makeUrl(), senses: makeSenses()}])
  }
  function handleChange(ev) {
    setName(ev.target.value);
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
  function handleSenses() {
    setSenses(makeSenses());
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
        <Button onClick={handleClick}>Add Model</Button>
        <Button onClick={handleClear}>Clear Models</Button>
        <Button onClick={handleSaveList}>Save Models List</Button>
        <Button onClick={handleLoadList}>Load Models List</Button>
        <Button onClick={handleSenses}>Change senses</Button>
        <pre>{JSON.stringify(senses)}</pre>
        <div>Name: {name}</div>
        <div>This is the derp section which is used for experiments</div>
          <input
           onChange={handleListChange}
          type="text" defaultValue={JSON.stringify(saveList)} />
          <div>Name: <input onChange={handleChange} /></div>
          <div>Data: {JSON.stringify(data)}
          {data.user_id > 0 ? <User user={data} />
            :
            ''}
          </div>
          <div className="result-box">
            <DerpModelsList models={models} />
          </div>
        </div>
    </Layout>
  );
}
// Fix Sort 
export default derpPage;
