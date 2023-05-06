interface boardSate {
  board: string[];
  pos: number;
  row: number;
  key: string;
  correctWord: string;
}

export interface rootStateBorad {
  board: boardSate;
}
