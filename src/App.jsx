import React, { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { WinningCombination } from "./components/WinningCombination.jsx"
import GameOver from "./components/GameOver.jsx"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WinningCombination) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }

  }


  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? '0' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = '0';
      }

      const updateTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,];
      return updateTurn;
    });

  }


  function handleRestart() {
    setGameTurns([]);
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="0" isActive={activePlayer === '0'} />
        </ol>
        {(winner || hasDraw) && <GameOver restart={handleRestart} winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />


      </div>
      <Log turns={gameTurns} />
    </main>

  )
}

export default App
