import React from "react";
import "./Square.css";
interface IProp {
  value: string;
  squareIndex: number;
}
export const Square: React.FC<IProp> = (props) => {
  const { value, squareIndex } = props;
  return <div className="square">{value}</div>;
};
