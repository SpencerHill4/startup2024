import React from 'react';
import './scores.css'

export function Scores() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      });
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{score.name}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score!</td>
      </tr>
    );
  }

  return (
    <main className="container mt-3 text-center">
      <table className="table table-striped-columns table-dark">
        <tbody>{scoreRows}</tbody>
      </table>
    </main>
  );
}