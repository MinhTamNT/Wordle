import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { Header } from "./components/Header/Header";
import { useSelector } from "react-redux/es/exports";
import { rootStateBorad } from "./components/Types/interfaceBoard";
function App() {
  const board = useSelector((state: rootStateBorad) => state.board.board);
  return (
    <div className="App">
      <Header type="h1" text="Wordle" />
      <Header type="subtitle" text="Another Wordle CLone" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
