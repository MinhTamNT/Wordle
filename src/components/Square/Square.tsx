import React, { useEffect, useState } from "react";
import "./Square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootStateBorad } from "../Types/interfaceBoard";
interface IProp {
  value: string;
  squareIndex: number;
}
export const Square: React.FC<IProp> = (props) => {
  const { value, squareIndex } = props;
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const correctWord = useSelector(
    (state: rootStateBorad) => state.board.correctWord
  );
  const position = useSelector((state: rootStateBorad) => state.board.pos);
  const reduxRow = useSelector((state: rootStateBorad) => state.board.row);
  const lastWordIndex = 4;
  const currentPostion =
    position === 5
      ? lastWordIndex
      : position > 5 && position % 5 === 0
      ? lastWordIndex
      : (position % 5) - 1;
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  useEffect(() => {
    if (correctWord[currentPostion] === value) {
      setCorrect(true);
    } else if (!correct && value !== "" && correctWord.includes(value)) {
      setAlmost(true);
    } else if (!correct && value !== "" && !correctWord.includes(value)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [value]);
  const status: any =
    Math.floor(squareIndex / 5) < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");
  return (
    <motion.div animate={value ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>
        {value}
      </div>
    </motion.div>
  );
};
