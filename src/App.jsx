import React, { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
function App() {
   const [isActive,setIsActive]= useState("X");

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="0" />
        </ol>
        <GameBoard />
        

      </div>
    </main>

  )
}

export default App
