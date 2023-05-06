import React from "react";
import "./KeyItem.css";
import { useSelector, useDispatch } from "react-redux";
import { rootStateBorad } from "../Types/interfaceBoard";
import { incPos, setBoard } from "../../Redux/boardSlice";
interface IPros {
  letter: string;
}
export const KeyItems: React.FC<IPros> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootStateBorad) => state.board.board);
  const position = useSelector((state: rootStateBorad) => state.board.pos);
  const row = useSelector((state: rootStateBorad) => state.board.row);
  const dispatch = useDispatch();
  let currentRow = Math.floor(position / 5);
  const selectedItemsKey = () => {
    if (position >= 30) return;
    console.log("Current row : ", currentRow);
    console.log("Row : ", row);

    if (currentRow > row) {
      return;
    }
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  };
  return (
    <div className="letter" onClick={selectedItemsKey}>
      {letter}
    </div>
  );
};
