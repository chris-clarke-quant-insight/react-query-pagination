import React from "react";
import Image from "next/image";
import classes from "../styles/Card.module.css";

const BusinessCard = ({business}) => {
    return <article key={business.id}>
      <Image
        src={business.url}
        alt={business.name}
        height={250}
        width={250}
        loading='lazy'
      />
      <div className={classes.text}>
        <p className={classes.answer}>Name: <strong className={classes.strong}>{business.name}</strong></p>
        <p className={classes.answer}>Details: <strong className={classes.strong}>{business.details}</strong></p>
        <p className={classes.answer}>About: <strong className={classes.strong}>{business.about}</strong></p>
        <p className={classes.answer}>Location: <strong className={classes.strong}>{business?.location?.x}, {business?.location?.y}</strong></p>
        <p className={classes.answer}>Address: <strong className={classes.strong}>{business.address}</strong></p>
        <p className={classes.answer}>Tags: <strong className={classes.strong}>{JSON.stringify(business.tags)}</strong></p>
        <p className={classes.answer}>Hours: <strong className={classes.strong}>{JSON.stringify(business.hours)}</strong></p>
        <i className={classes.id}>Id: <strong className={classes.strong}>{business.id} </strong></i>
      </div>
    </article>
}

export default BusinessCard;
