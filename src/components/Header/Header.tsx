import React from "react";
import "./Header.css";
interface IProp {
  type: string;
  text: string;
}
export const Header: React.FC<IProp> = (props) => {
  const { type, text } = props;
  return <p className={`heading-${type}`}>{text}</p>;
};
