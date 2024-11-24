import React, { useState, useEffect } from 'react';
import './profile.css';

export function Profile({ userName }) {
  const [highScore, setHighScore] = useState(0);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function fetchUserData() {
      try {
        console.log(`Fetching user data for: ${userName}`); // Add this line for debugging
        const response = await fetch(`/api/user/${userName}`);
        const userData = await response.json();
        console.log('User data:', userData); // Add this line for debugging
        setHighScore(userData.highscore);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [userName]);

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
