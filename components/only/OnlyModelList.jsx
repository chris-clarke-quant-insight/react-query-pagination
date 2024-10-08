import React from "react";
import Only from '.';

export default function OnlyModelsList(props) {
  return <ul className="grid-container">{props.models.length ? props.models.map(item => {
    return (<li key={item.id}><a href={`/${item.id}?value=${item.value}&url=${item.url}`}><Only key={item.id} {...item} /></a></li>);
  }) : <li>No Items to display</li>}</ul>;
}
