import { get, writable, derived } from "svelte/store";

export type Optional<T> = T | " ";
export type CellValue = "X" | "O";
export type BoardCells = Optional<CellValue>[];
export type Player = CellValue;
export type Winner = {
  winner?: CellValue;
  cells?: [number, number, number];
};

export function createBoard() {
  let board = writable<BoardCells>(Array(9).fill(" "));
  let winner = derived<typeof board, Winner>(board, ($board) => {
    const indexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const lineIdx of indexes) {
      const uniqValues = Array.from(new Set(lineIdx.map((i) => $board[i])));
      if (uniqValues.length === 1 && uniqValues[0] !== " ") {
        return {
          winner: $board[lineIdx[0]] as CellValue,
          cells: lineIdx,
        } as Winner;
      }
    }
    return {} as Winner;
  });

  function setCell(index: number, player: CellValue) {
    const state = get(board);
    if (state[index] !== " ") return false;

    board.update((state) => {
      state[index] = player;
      return state;
    });
    return true;
  }

  function setState(state: string) {
    board.set(state.split("") as Array<Optional<CellValue>>);
  }

  function reset() {
    setState("         ");
  }

  function hasWinner() {
    const state = get(board);
    const winningXPatterns =
      "^(XXX|...XXX|......XXX|X..X..X..|.X..X..X.|..X..X..X|X...X...X|..X.X.X..)";
    const winningOPatterns = winningXPatterns.replaceAll("X", "O");

    if (state.join("").match(winningXPatterns)) return "X";
    if (state.join("").match(winningOPatterns)) return "O";
    return undefined;
  }

  function nextPlayer() {
    const emptyCells = get(board).filter((cell) => cell === " ");
    return emptyCells.length % 2 ? "X" : ("O" as CellValue);
  }

  function getWinnerCells() {
    const indexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const cells = get(board);

    for (const lineIdx of indexes) {
      const uniqValues = Array.from(new Set(lineIdx.map((i) => cells[i])));
      if (uniqValues.length === 1 && uniqValues[0] !== " ") {
        return lineIdx;
      }
    }
    return [];
  }

  return {
    board: {
      ...board,
      nextPlayer,
      setCell,
      hasWinner,
      setState,
      reset,
      getWinnerCells,
    },
    winner,
    setState,
  };
}

export const { board, winner } = createBoard();
