import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Aside from "../components/Aside";
import Layout from "../components/Layout";
import Sort from "../components/Sort";
import Search from "../components/Search";
import TopSearch from "../components/TopSearch";
import { ModelsList } from "./ModelsList";
import { makeValue } from "./makeValue";
import { makeUrl } from "./makeUrl";
import { makeID } from "./makeID";

function derpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [name, setName] = useState("alice"); // For paginated data
  const [sort, setSort] = useState('name');
  const [models, setModels] = useState([]);
  const [data, setData] = useState({});
  const [saveList, setSaveList] = useState();

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
    setModels([...models, {id: makeID(), value: makeValue(), url: makeUrl()}])
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
  return (<Layout search={<TopSearch handleChange={handleChange}/>}  aside={<><Aside />
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

        <div>Name: {name}</div>
        <div>This is the derp section which is used for experiments</div>
          <input
           onChange={handleListChange}
          type="text" defaultValue={JSON.stringify(saveList)} />
          <div>Name: <input onChange={handleChange} /></div>
          <div>Data: {JSON.stringify(data)}
          {data.user_id > 0 ? (<>
          <div>id: {data.user_id}</div>
              <div>username: {data.username}</div>
              <div>email: {data.email}</div>
              <div>password_hash: {data.password_hash}</div>
              <div>created_at: {data.created_at}</div>
              <div>updated_at: {data.updated_at}</div>
            </>)
            :
            ''}
          </div>
          <div className="result-box">
            <ModelsList models={models} />
          </div>
        </div>
    </Layout>
  );
}
// Fix Sort 
export default derpPage;
