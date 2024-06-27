import Image from "next/dist/client/image";
import React from "react";

// Item
// ID
// Title
// Type // Link, Image, Video, Text
// Content
// CreatedAt
// UpdatedAt

const Item = ({ type, content, id, title, updatedAt, createdAt }) => {
  let result = {};
  
  switch(type) {
    case 'video':
      result = (<li key={id} className={type}><video>{content}</video>{updatedAt}{createdAt}</li>);  
      break;
    case 'link':
      result = (<li key={id} className={type}><a href={content}>{title}{updatedAt}{createdAt}</a></li>);  
      break;
    case 'image':
      result = (<li key={id} className={type}><Image width={240} height={320} src={content} alt={title}/>{updatedAt}{createdAt}</li>);  
      break;
    case 'text':
      result = (<li key={id} className={type}><h3>{title}</h3><p>{content}</p>{updatedAt}{createdAt}</li>);  
      break;
    default:
      result = (<li key={id} className={type}>{content}</li>);
  }
  return result;
}

const ItemList = ({ items }) => {
  return (<>
  <h3>Timeline items: {items.length}</h3>
  <ul>
    {items.map(i => <Item {...i} />)}
    </ul>
    </>)
}

export default function Timeline (props) {
  const { items } = props;
  return (<div>
    {items && items.length > 0 ? <ItemList items={items} />
    :
    'Nothing to show check back later'}
    </div>);
}
