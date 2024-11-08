import React from 'react';
import './play.css';

export function Play() {
  return (
    <main class="container-fluid text-center">
      <div>Player: spencerHill4 <span>Score: 240</span></div>
      <div class="grid">
        <div class="space"></div>
        <div class="space"><div class="square"></div></div>
        <div class="space"></div>
        <div class="space"></div>
        <div class="space"><div class="player"></div></div>
        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>
      </div>
    </main>
  );
}