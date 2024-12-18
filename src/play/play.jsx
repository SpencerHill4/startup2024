import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from './grid';
import { Players } from './players';
import { GameEvent, GameNotifier } from './gameNotifier';
import './play.css';

export function Play({ userName, score, setScore }) {
  const [gridSize, setGridSize] = useState(3);
  const [playerPosition, setPlayerPosition] = useState(4);
  const [squares, setSquares] = useState(Array(9).fill({ type: null, growth: 0 }));
  const [intervalCount, setIntervalCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  let intervalAmount = 2000;
  let intervalMin = 200;

  function reset() {
    setGridSize(3);
    setPlayerPosition(4);
    setSquares(Array(9).fill({ type: null, growth: 0 }));
    setIntervalCount(0);
    setGameOver(false);
    setCurrScore(0);
  }

  function increaseGridSize() {
    console.log("Increasing grid size!");
    setGridSize(gridSize + 2);
    setSquares(Array((gridSize + 2) * (gridSize + 2)).fill({ type: null, growth: 0 }));
    intervalAmount += 200;
  }

  function increaseScore() {
    console.log("Increasing score!");
    setCurrScore(currScore + 20);
  }

  async function saveScore(score) {
    const newScore = { name: userName, score: score };

    const topTen = await (await fetch('/api/scores')).json();
    topTen.sort((a, b) => b - a);

    const topTenScore = topTen[0].score;
    const bottomTenScore = topTen[topTen.length - 1];
    console.log("TopTen: " + topTenScore);
    console.log("BottomTen: " + bottomTenScore);
    if (score > topTen[0].score) {
      GameNotifier.broadcastEvent(userName, GameEvent.First, newScore);
    }
    else if (score > topTen[topTen.length - 1].score) {
      GameNotifier.broadcastEvent(userName, GameEvent.Ten, newScore);
    }

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
  }

  useEffect(() => {
    if (currScore > 0 && currScore % 2500 === 0) {
      increaseGridSize();
    }
  }, [currScore]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newPosition = playerPosition;
      switch (event.key) {
        case 'w':
          if (newPosition >= gridSize) {
            newPosition -= gridSize;
          }
          break;
        case 'a':
          if (newPosition % gridSize !== 0) {
            newPosition -= 1;
          }
          break;
        case 's':
          if (newPosition < gridSize * (gridSize - 1)) {
            newPosition += gridSize;
          }
          break;
        case 'd':
          if (newPosition % gridSize !== gridSize - 1) {
            newPosition += 1;
          }
          break;
        default:
          break;
      }
      if (squares[newPosition].type === 'square' && squares[newPosition].growth < 100) {
        increaseScore();
        setSquares(squares.map((square, index) => index === newPosition ? { type: null, growth: 0 } : square));
      }
      if (squares[newPosition].growth < 100) {
        setPlayerPosition(newPosition);
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const swipeThreshold = 50;
      let newPosition = playerPosition;

      if (Math.abs(touch.clientX - startX) > Math.abs(touch.clientY - startY)) {
        if (touch.clientX - startX > swipeThreshold) {
          // Swipe Right
          if (newPosition % gridSize !== gridSize - 1) {
            newPosition += 1;
          }
        } else if (startX - touch.clientX > swipeThreshold) {
          // Swipe Left
          if (newPosition % gridSize !== 0) {
            newPosition -= 1;
          }
        }
      } else {
        if (touch.clientY - startY > swipeThreshold) {
          // Swipe Down
          if (newPosition < gridSize * (gridSize - 1)) {
            newPosition += gridSize;
          }
        } else if (startY - touch.clientY > swipeThreshold) {
          // Swipe Up
          if (newPosition >= gridSize) {
            newPosition -= gridSize;
          }
        }
      }

      if (squares[newPosition].type === 'square' && squares[newPosition].growth < 100) {
        increaseScore();
        setSquares(squares.map((square, index) => index === newPosition ? { type: null, growth: 0 } : square));
      }
      if (squares[newPosition].growth < 100) {
        setPlayerPosition(newPosition);
      }
    };

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    };

    if (window.navigator.maxTouchPoints > 0) {
      // Mobile device
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
    } else {
      // Desktop
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (window.navigator.maxTouchPoints > 0) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      } else {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [playerPosition, gridSize, squares]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalCount(intervalCount + 1);
      const newSquares = squares.slice();
      let emptyIndices = newSquares.map((square, index) => (square.type === null && index !== playerPosition ? index : null)).filter(index => index !== null);

      if (emptyIndices.length <= 2) {
        setGameOver(true);
        clearInterval(interval);
        return;
      }
      if (emptyIndices.length > 0) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newSquares[randomIndex] = { type: 'square', growth: 0 };
      }
      setSquares(newSquares.map(square => square.type === 'square' && square.growth < 100 ? { ...square, growth: square.growth + 5 } : square));
      if (gridSize > 3) { intervalMin += 200; }
    }, Math.max(intervalMin, intervalAmount - intervalCount * 50));
    return () => clearInterval(interval);
  }, [squares, intervalCount, playerPosition]);

  useEffect(() => {
    if (gameOver) {
      if (currScore > score) {
        setScore(currScore);
      }
      saveScore(currScore);
    }
  }, [gameOver]);

  return (
    <main className="container-fluid text-center">
      <Players userName={userName} />
      <Button onClick={reset}>Reset</Button>
      <div>Controls: {window.navigator.maxTouchPoints > 0 ? "Swipe" : "W A S D"}</div>
      <div>Score: {currScore}</div>
      {gameOver ? (
        <div>Game Over!</div>
      ) : (
        <Grid gridSize={gridSize} playerLocation={playerPosition} squares={squares} />
      )}
    </main>
  );
}
