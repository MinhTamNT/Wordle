import React from "react";
import { KeyItems } from "../KeyItems/KeyItems";
import "./KeyBoard.css";
import { useSelector, useDispatch } from "react-redux";
import { rootStateBorad } from "../Types/interfaceBoard";
import { DesPos, setBoard } from "../../Redux/boardSlice";
export const KeyBoard: React.FC = () => {
  const dispacth = useDispatch();
  const postion = useSelector((state: rootStateBorad) => state.board.pos);
  const board = useSelector((state: rootStateBorad) => state.board.board);
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const handlerClickBack = () => {
    if (postion <= 0) return;
    const newBoard = [...board];
    newBoard[postion - 1] = "";
    dispacth(DesPos());
    dispacth(setBoard(newBoard));
  };
  return (
    <div className="keyboard-conatier">
      {rows.map((row, index) => {
        return (
          <div className="row">
            {index === 2 && <span className="letter-row">Enter</span>}
            {row.split(" ").map((letter, index) => {
              return (
                <div className="letter-row">
                  <KeyItems letter={letter.toUpperCase()} />
                  {letter === "m" && (
                    <span className="letter-row" onClick={handlerClickBack}>
                      Back
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
