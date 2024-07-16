import { writable, readable, derived } from "svelte/store";
import type { Cells, Player, ResetOptions, Winner } from "./types";

const initialCells = Array(9).fill(" ") as Cells;

const cells = writable(initialCells);

const nextPlayer = writable<Player>("X");

const winner = readable<Winner>({}, (set) => {
  return cells.subscribe(($cells) => {
    const indexes: Required<Winner>["cells"][] = [
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
      const uniqValues = Array.from(new Set(lineIdx.map((i) => $cells[i])));
      if (uniqValues.length === 1 && uniqValues[0] !== " ") {
        set({
          player: $cells[lineIdx[0]] as Player,
          cells: lineIdx,
        });
        return;
      }
    }

    set({});
  });
});

export const gameStore = derived(
  [cells, nextPlayer, winner],
  ([$cells, $nextPlayer, $winner]) => ({
    cells: $cells,
    nextPlayer: $nextPlayer,
    winner: $winner,
  })
);

export function reset({ player, state }: ResetOptions = {}) {
  cells.set((state ?? "         ").split("") as Cells);
  nextPlayer.set(player ?? "X");
}

export function selectCellAt(index: number) {
  cells.update(($cells) => {
    if ($cells[index] === " ") {
      const newState = [...$cells];

      nextPlayer.update(($nextPlayer) => {
        newState[index] = $nextPlayer;
        return $nextPlayer === "X" ? "O" : "X";
      });
      return newState;
    }
    return $cells;
  });
}
