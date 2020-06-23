import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const x0 = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    // return if won or occupied
    if (winner || squares[i]) return;
    // select the squares
    squares[i] = x0;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
      setStepNumber(step);
      setXisNext(step % 2 === 0 ? 'O' : 'X');
  } 

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to start`;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>React Tic Tac Toe with Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
          <h3>{winner ? "Winner: " + winner : "Next Player" + x0}</h3>
        </div>
      </div>
    </>
  );
};

export default Game;
