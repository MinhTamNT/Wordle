import React from "react";
import { KeyItems } from "../KeyItems/KeyItems";
import "./KeyBoard.css";
import { useSelector, useDispatch } from "react-redux";
import { rootStateBorad } from "../Types/interfaceBoard";
import { DesPos, incRow, setBoard } from "../../Redux/boardSlice";
import { toast } from "react-toastify";
import woList from "../../word.json";
import "react-toastify/dist/ReactToastify.css";
export const KeyBoard: React.FC = () => {
  const dispacth = useDispatch();
  const postion = useSelector((state: rootStateBorad) => state.board.pos);
  const board = useSelector((state: rootStateBorad) => state.board.board);
  const correctWord = useSelector(
    (state: rootStateBorad) => state.board.correctWord
  );
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  let allWord: string[] = woList.words;
  let boardCheck: string = `${board[postion - 5]}${board[postion - 4]}${
    board[postion - 3]
  }${board[postion - 2]}${board[postion - 1]}`.toLowerCase();
  const row = useSelector((state: rootStateBorad) => state.board.row);
  const handlerClickBack = () => {
    console.log("postion -1 /5 : ", Math.floor(postion - 1) / 5);
    console.log("Row KeyBoard : ", row);

    if (Math.floor(postion - 1) / 5 < row) return;
    const newBoard = [...board];
    newBoard[postion - 1] = "";
    dispacth(DesPos());
    dispacth(setBoard(newBoard));
  };
  const handleEnter = () => {
    if (allWord.includes(boardCheck) === false) {
      toast.warning("Invalid Word", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (allWord.includes(boardCheck)) {
      if (postion % 5 == 0 && postion !== 0) dispacth(incRow());
    }
    if (postion === 30 && allWord.includes(boardCheck)) {
      toast.info(`The word is ${correctWord}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="keyboard-conatier">
      {rows.map((row, index) => {
        return (
          <div className="row" key={index}>
            {index === 2 && (
              <span className="letter-row" onClick={handleEnter}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter) => {
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
