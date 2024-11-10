import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Grid } from './grid';
import './play.css';

export function Play() {
  const [gridSize, setGridSize] = useState(3);
  const [score, setScore] = useState(0);

  function reset() {
    setGridSize(3);
    setScore(0);
  }

  function increaseGridSize() {
    console.log("increasing grid size!");
    setGridSize(gridSize + 2);
  }

  function increaseScore() {
    console.log("increasing score!");
    setScore(score + 20);
  }

  return (
    <main className="container-fluid text-center">
      <Button onClick={reset}>Reset</Button>
      <Button onClick={increaseGridSize}>Size</Button>
      <Button onClick={increaseScore}>Score</Button>
      <div>Score: {score}</div>
      <Grid gridSize={gridSize} />
    </main>
  );
}