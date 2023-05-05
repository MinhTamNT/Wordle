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
  const dispatch = useDispatch();
  const selectedItemsKey = () => {
    if (position >= 30) return;
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
