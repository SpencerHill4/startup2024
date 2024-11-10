import React, { useEffect, useState } from 'react';

export function Grid({ gridSize, playerLocation, squares }) {
  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
        let contents = "";
        if (i === playerLocation) {
            contents = <div className='player'></div>;
        } else if (squares[i].type === 'square') {
            contents = <div className='square' style={{ width: `${squares[i].growth}%`, height: `${squares[i].growth}%` }}></div>;
        }
        grid.push(
            <div key={i} className='space'>{contents}</div>
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
