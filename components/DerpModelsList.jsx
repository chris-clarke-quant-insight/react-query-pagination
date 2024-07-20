import React from "react";
import SensesCard from "./SensesCard";

export default function DerpModelsList(props) {
  return <ul className="grid-container">{props.models.length ? props.models.map(item => {
    return (<li key={item.id}><a href={`/${item.id}?value=${item.value}&url=${item.url}`}><SensesCard key={item.id} character={item} /></a></li>);
  }) : <li>No Items to display</li>}</ul>;
}
