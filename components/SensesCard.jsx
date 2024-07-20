import React from "react";
import Image from "next/image";
import classes from "../styles/Card.module.css";

const SensesCard = ({character}) => {
    return <article key={character.id} className={`${classes[character.id]} bzj`}>
      <Image
        src={character.url}
        alt={character.id}
        height={600}
        width={408}
        loading='lazy'
      />
      <div className={classes.text}>
        <p className={classes.answer}>Value: <strong className={classes.strong}>{character.value}</strong></p>
        <p><i className={classes.id}>Id: <strong className={classes.strong}>{character.id} </strong></i></p>
        {character.senses.senses.map((value, index)=> <p><i className={classes.id}>{index}: <strong className={classes.strong}>{value}</strong></i></p>)}
        <p><i className={classes.id}>Remainder: <strong className={classes.strong}>{character.senses.remainder}</strong></i></p>
      </div>
    </article>
}

export default SensesCard;