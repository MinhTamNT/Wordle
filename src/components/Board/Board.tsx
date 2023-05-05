import React from "react";
import { Square } from "../Square/Square";
import "./Board.css";
import { KeyBoard } from "../KeyBoard/KeyBoard";
interface IProp {
  board: string[];
}
export const Board: React.FC<IProp> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square, index) => (
          <>
            <Square value={square} squareIndex={index} />
          </>
        ))}
      </div>
      <div className="keyboard">
        <KeyBoard />
      </div>
    </>
  );
};
