import React from "react";
import CharacterCard from "../components/CharacterCard";


export function ModelsList(props) {
  return <ul className="grid-container">{props.models.length ? props.models.map(item => {
    return (<li key={item.id}><a href={`/${item.id}?value=${item.value}&url=${item.url}`}><CharacterCard key={item.id} character={item} /></a></li>);
  }) : <li>No Items to display</li>}</ul>;
}
