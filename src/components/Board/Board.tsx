import React from "react";
import { Square } from "../Square/Square";
import "./Board.css";
interface IProp {
  board: string[];
}
export const Board: React.FC<IProp> = (props) => {
  const { board } = props;
  return (
    <div className="board">
      {board.map((square, index) => (
        <>
          <Square value={square} squareIndex={index} />
        </>
      ))}
    </div>
  );
};
