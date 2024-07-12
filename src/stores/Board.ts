import { get, writable } from "svelte/store";

export function createBoard() {
  let board = writable(Array<string>(9).fill(" "));

  function setCell(index: number, player: "X" | "O") {
    const state = get(board);
    if (state[index] !== " ") return false;

    board.update((state) => {
      state[index] = player;
      return state;
    });
    return true;
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

  function setState(state: string) {
    board.set(state.split(""));
  }

  function reset() {
    setState("         ");
  }

  function nextPlayer() {
    const emptyCells = get(board).filter((cell) => cell === " ");
    return emptyCells.length % 2 ? "X" : "O";
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
    ...board,
    setCell,
    hasWinner,
    setState,
    reset,
    nextPlayer,
    getWinnerCells,
  };
}

export const board = createBoard();
