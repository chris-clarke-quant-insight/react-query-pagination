import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Layout from "../components/Layout";

import { makeSenses, makeModifier, checkDead } from "../utils/makeSenses";

const defaultHealth = {
  'A': 0.5,
  'B': 0.5,
  'C': 0.5,
  'D': 0.5,
  'E': 0.5,
  'F': 0.5,
  'G': 0.5,
  'H': 0.5,
  'I': 0.5,
  'J': 0.5,
  'K': 0.5,
  'L': 0.5,
  'M': 0.5,
  'N': 0.5,
  'O': 0.5,
  'P': 0.5,
  'Q': 0.5,
  'R': 0.5,
  'S': 0.5,
  'T': 0.5,
  'U': 0.5,
  'V': 0.5,
  'W': 0.5,
  'X': 0.5,
  'Y': 0.5,
  'Z': 0.5
};


function Page() {
  const [changeList, setChangeList] = useState([]);
  const [health, setHealth] = useState(defaultHealth);
  const [senses, setSenses] = useState(makeSenses());
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      activity();
      setCount(prevCount => prevCount + 1);
    }, 100);
    setIntervalId(newIntervalId);
  };

  function activity() {
    const alphaList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphaCopy = alphaList.split('');
    const shuffledCopy = alphaCopy.sort(function () {
        return Math.random() - 0.5;
    });
    const altCopy = shuffledCopy.map(item => (Math.random() > 0.5) ? item.toLowerCase() : item);
    const changes = altCopy[0] + altCopy[1] + altCopy[2] + altCopy[3] + altCopy[4] + altCopy[5];

    setChangeList([...changeList, changes])
    setHealth(makeModifier(health, changes));
  }

  function handleSenses() {
    setSenses(makeSenses());
  }
  function handleReset(){
    setHealth(defaultHealth);
  }
  function handleActivity() {
    if(isActive){
      handleClick();
    }

    setIsActive(!isActive);
  }
  return (<Layout
    location="team"
    search={<></>}
    aside={<div className='grid-container'>
    <Button variant="contained" color="primary" onClick={handleSenses}>Change senses</Button>
    <Button variant="contained" color="secondary" onClick={handleActivity}>Activate Timer</Button>
    <Button variant="contained" color="secondary" onClick={activity}>Activate senses</Button>
    <Button variant="contained" color="default" onClick={handleReset}>Reset health</Button>
    </div>}>
      <div>
        <h1>Weird Health game(?)</h1>
        <div className="result-box">
          <pre>{JSON.stringify(checkDead(health))}: count : {count}: isActive : {JSON.stringify(isActive)}</pre>
          <pre>{JSON.stringify(senses)}</pre>
          <ul className="grid-container">
          <li className="grid-item"><Button variant="contained" color="secondary">{senses.remainder}: {JSON.stringify(health[senses.remainder])}</Button>
          </li>
            <li><Button variant="contained" color="primary">{senses.senses[0]} {health[senses.senses[0][0]] + health[senses.senses[0][1]] + health[senses.senses[0][2]] + health[senses.senses[0][3]] + health[senses.senses[0][4]]}</Button>
            </li>
            <li><Button variant="contained" color="primary">{senses.senses[1]} {health[senses.senses[1][0]] + health[senses.senses[1][1]] + health[senses.senses[1][2]] + health[senses.senses[1][3]] + health[senses.senses[1][4]]}</Button>
            </li>
            <li><Button variant="contained" color="primary">{senses.senses[2]} {health[senses.senses[2][0]] + health[senses.senses[2][1]] + health[senses.senses[2][2]] + health[senses.senses[2][3]] + health[senses.senses[2][4]]}</Button>
            </li>
            <li><Button variant="contained" color="primary">{senses.senses[3]} {health[senses.senses[3][0]] + health[senses.senses[3][1]] + health[senses.senses[3][2]] + health[senses.senses[3][3]] + health[senses.senses[3][4]]}</Button>
            </li>
            <li><Button variant="contained" color="primary">{senses.senses[4]} {health[senses.senses[4][0]] + health[senses.senses[4][1]] + health[senses.senses[4][2]] + health[senses.senses[4][3]] + health[senses.senses[4][4]]}</Button>
            </li>
          </ul>
          <pre>{JSON.stringify(changeList)}</pre>
          <ul className="grid-container">{Object.values(health).map((val, index) => 
            <li className="grid-item" key={index}>
              <Button variant="contained" color={index % 2 ? "primary": "secondary"}>{Object.keys(health)[index]}: {val}</Button>
              </li>)}</ul>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
