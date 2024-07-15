export type Optional<T> = T | " ";
export type CellValue = "X" | "O";

export type Cells = Optional<CellValue>[];
export type Player = CellValue;
export type Winner = {
  winner?: CellValue;
  cells?: [number, number, number];
};

export type Score = {
  X: number;
  O: number;
  ties: number;
};

export type Board = {
  cells: Cells;
  nextPlayer: Player;
  scores: Score;
};
