import React from 'react';
import './profile.css';

export function Profile({userName, highScore}) {
  return (
    <main className="container-fluid text-center">
        <div>Username: {userName}</div>
        <div>High Score: {highScore}</div>
    </main>
  );
}