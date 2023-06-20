import React from "react";
import Image from "next/image";
import classes from "../styles/Card.module.css";

const Card = ({character}) => {
    return <article key={character.id} className={classes[character.status.toLowerCase()]}>
      <Image
        src={character.image}
        alt={character.name}
        height={250}
        width={250}
        loading='lazy'
      />
      <div className={classes.text}>
        <p className={classes.answer}>Name: <strong className={classes.strong}>{character.name}</strong></p>
        <p className={classes.answer}>Gender: <strong className={classes.strong}>{character.gender}</strong></p>
        <p className={classes.answer}>Lives in: <strong className={classes.strong}>{character?.location?.name}</strong></p>
        <p className={classes.answer}>Species: <strong className={classes.strong}>{character.species}</strong></p>
        <p className={classes.answer}>Status: <strong className={classes.strong}>{character.status}</strong></p>
        <i className={classes.id}>Id: <strong className={classes.strong}>{character.id} </strong></i>
      </div>
    </article>
}

export default Card;