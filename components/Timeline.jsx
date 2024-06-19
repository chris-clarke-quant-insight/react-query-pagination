import React from "react";

export default function Timeline (props) {
    const { items } = props;
  return (<div>
    {items && items.length > 0 ? (<ul>{items.map(i => <li key={i}>{i}</li>)}</ul>)
    :
    'Nothing to show check back later'}
    </div>);
}
