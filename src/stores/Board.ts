import { readable, writable } from "svelte/store";

type Player = "X" | "O";
type CellValue = Player | " ";

type Cell = ReturnType<typeof createCellStore>;
type CellTuple<L extends number, T extends any[] = []> = T["length"] extends L
  ? T
  : CellTuple<L, [...T, Cell]>;

type Board = CellTuple<9>;
type Choice = {
  index: number;
  value: Player;
};

export function createCellStore() {
  const { update, subscribe } = writable<CellValue>(" ");
  return {
    subscribe,
    set: (value: Player) =>
      update(($current) => ($current !== " " ? $current : value)),
  };
}

export function is_adajcent(index_a: number, index_b: number) {
  const [aX, aY] = [Math.floor(index_a / 3), index_a % 3];
  const [bX, bY] = [Math.floor(index_b / 3), index_b % 3];

  return Math.max(Math.abs(aX - bX), Math.abs(aY - bY)) === 1;
}

export function createBoard() {
  const cells = Array(9)
    .fill(0)
    .map(() => createCellStore()) as Board;
  const lastChoice = writable<Choice | undefined>(undefined);

  // react to cells changes and register it in lastChoice
  cells.map((cell, index) => {
    cell.subscribe((value) => {
      if (value !== " ") lastChoice.set({ index, value });
    });
  });

  return {
    cells,
    lastChoice: { subscribe: lastChoice.subscribe },
  };
}
