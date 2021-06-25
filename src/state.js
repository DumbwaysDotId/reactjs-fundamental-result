import React, { useState } from "react";

function State() {
  //init State
  const [counter, setCounter] = useState(0);

  //Create Function Add
  function Add() {
    return setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    return setCounter(counter - 1);
  }

  return (
    <div>
      <p>
        If you click the add button it will increase by one, vice versa if you
        click the less button it will decrease by one
      </p>

      <h2>{counter}</h2>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
