export type Player = "X" | "O";
export type CellValue = Player | " ";
export type Cells = CellValue[];
export type ResetOptions = Partial<{
  player: Player;
  state: string;
}>;

export type Winner = {
  player?: Player;
  cells?: [number, number, number];
};

export type Score = {
  X: number;
  O: number;
  ties: number;
};
