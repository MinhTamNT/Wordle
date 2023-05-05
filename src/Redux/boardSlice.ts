import { createSlice } from "@reduxjs/toolkit";
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
  },
});

export const { setBoard, incPos, DesPos } = boardSlice.actions;
export default boardSlice.reducer;
