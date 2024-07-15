import { get, writable, derived } from "svelte/store";
import type { Cells, CellValue, Optional, Winner } from "./types";

export function createBoard() {
  let cells = writable<Cells>(Array(9).fill(" "));
  let winner = derived<typeof cells, Winner>(cells, ($board) => {
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
    let updated = false;

    cells.update((state) => {
      updated = state[index] === " ";
      if (updated) {
        const newState = [...state];
        newState[index] = player;
        return newState;
      } else {
        return state;
      }
    });
    return updated;
  }

  function setState(state: string) {
    cells.set(state.split("") as Array<Optional<CellValue>>);
  }

  function reset() {
    setState("         ");
  }

  function hasWinner() {
    const state = get(cells);
    const winningXPatterns =
      "^(XXX|...XXX|......XXX|X..X..X..|.X..X..X.|..X..X..X|X...X...X|..X.X.X..)";
    const winningOPatterns = winningXPatterns.replaceAll("X", "O");

    if (state.join("").match(winningXPatterns)) return "X";
    if (state.join("").match(winningOPatterns)) return "O";
    return undefined;
  }

  function nextPlayer() {
    const emptyCells = get(cells).filter((cell) => cell === " ");
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

    for (const lineIdx of indexes) {
      const uniqValues = Array.from(new Set(lineIdx.map((i) => get(cells)[i])));
      if (uniqValues.length === 1 && uniqValues[0] !== " ") {
        return lineIdx;
      }
    }
    return [];
  }

  return {
    board: {
      ...cells,
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
