import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className="container-fluid text-center">
      <div>Score: 240</div>
      <div className="grid">
        <div className="space"></div>
        <div className="space"><div class="square"></div></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"><div class="player"></div></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
      </div>
    </main>
  );
}