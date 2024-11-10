import React, { useEffect, useState } from 'react';
//import './grid.css';

export function Grid({ gridSize }) {
  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.push(
            <div key={i} className='space'></div>
        );
    }

    return grid;
  }

  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
      {createGrid()}
    </div>
  );
}
