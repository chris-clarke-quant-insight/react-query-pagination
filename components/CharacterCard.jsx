import React from "react";
import Image from "next/image";
import classes from "../styles/Card.module.css";

const CharacterCard = ({character}) => {
    return <article key={character.id} className={classes[character.id]}>
      <Image
        src={character.url}
        alt={character.id}
        height={600}
        width={408}
        loading='lazy'
      />
      <div className={classes.text}>
        <p className={classes.answer}>Value: <strong className={classes.strong}>{character.value}</strong></p>
        <i className={classes.id}>Id: <strong className={classes.strong}>{character.id} </strong></i>
      </div>
    </article>
}

export default CharacterCard;