import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Aside from "../components/Aside";
import Layout from "../components/Layout";
import Sort from "../components/Sort";
import Search from "../components/Search";
import TopSearch from "../components/TopSearch";
import ModelCard from "../components/ModelCard";

function ModelsList (props) {
  return <ul>{props.models.length ? props.models.map(item => {
    return (<li key={item.id}><ModelCard item={item} /></li>)
  }): <li>No Items to display</li>}</ul>
}
function makeID() {
  const list = 'abcdefghijklmnopqrstuvwxyz';
  const item = list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)];
  return item; 
}
function makeValue() {
  const list = 'abcdefghijklmnopqrstuvwxyz';
  const item = list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)];
  return item; 
}
function casualPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('name');
  const [models, setModels] = useState( []) 
  
  function handleChange(e) {
    setSearchTerm(e.target.value.toUpperCase());
  }
  function handleSort(e){
    setSort(e.target.value);
  }
  function handleClick(){
    setModels([...models, {id: makeID(), value: makeValue()}])
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
      <ModelsList models={models} />
    </div></Layout>
  );
}
// Fix Sort 
export default casualPage;
