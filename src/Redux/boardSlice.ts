import { createSlice } from "@reduxjs/toolkit";
import WordList from "../word.json";
let random = Math.floor(Math.random() * WordList.words.length);
export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    pos: 0,
    row: 0,
    key: "",
    correctWord: WordList.words[random].toUpperCase(),
  },
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    incPos: (state) => {
      state.pos++;
    },
    DesPos: (state) => {
      state.pos--;
    },
    incRow: (state) => {
      state.row++;
    },
    setKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { setBoard, incPos, DesPos, incRow, setKey } = boardSlice.actions;
export default boardSlice.reducer;
