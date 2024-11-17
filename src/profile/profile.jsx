import React, { useState, useEffect } from 'react';
import './profile.css';

export function Profile({ userName, highScore }) {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function fetchJoke() {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setJoke(`${data.setup} - ${data.punchline}`);
      } catch (error) {
        console.error('Error fetching joke:', error);
        setJoke('Could not fetch a joke at this time.');
      }
    }
    fetchJoke();
  }, []);

  return (
    <main className="container-fluid text-center" id='profile'>
      <div>Username: {userName}</div>
      <div>High Score: {highScore}</div>
      <br />
      <div>Joke: {joke}</div>
    </main>
  );
}
