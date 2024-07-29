import { derived, writable } from "svelte/store";

export type Player = "X" | "O";
export type CellValue = Player | " ";

export type CellStore = ReturnType<typeof createCellStore>;
export type CellTuple<
  L extends number,
  T extends any[] = []
> = T["length"] extends L ? T : CellTuple<L, [...T, CellStore]>;

export type Winner = {
  player: Player;
  cells: [number, number, number];
};
export type Board = ReturnType<typeof createBoardStore>;
export type BoardState = {
  nextPlayer: Player;
  endGame: boolean;
  lastChoice: Choice | undefined;
  winner: Winner | undefined;
};
export type Choice = {
  index: number;
  value: Player;
};

export function createCellStore() {
  const { set, update, subscribe } = writable<CellValue>(" ");
  return {
    subscribe,
    set(value: Player) {
      let success = false;
      update(($current) => {
        success = $current === " ";
        return $current !== " " ? $current : value;
      });
      return success;
    },
    reset() {
      set(" ");
    },
  };
}

export function hasAligned(indexes: number[]) {
  const winningCombinations = [
    [0, 1, 2], // Horizontal top row
    [3, 4, 5], // Horizontal middle row
    [6, 7, 8], // Horizontal bottom row
    [0, 3, 6], // Vertical left column
    [1, 4, 7], // Vertical middle column
    [2, 5, 8], // Vertical right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (let combination of winningCombinations) {
    if (combination.every((value) => indexes.includes(value)))
      return combination;
  }

  return null;
}

/**
 * Board with multiple stores for reactive process
 *
 * select a cell will update :
 * - a particular cell
 * - next player
 *
 * cell's update event will update :
 * - lastChoice
 * - playerXCells if it's player X
 * - playerOCells if it's player O
 *
 * 'winner' is derived from playerXCells and playerOCells
 * 'endGame' is derived from winner and player cells total count
 */

function createBoardInternalStores(initialPlayer: Player) {
  // stores
  const cells = Array(9)
    .fill(0)
    .map(() => createCellStore()) as CellStore[];
  const lastChoice = writable<Choice | undefined>();
  const nextPlayer = writable<Player>(initialPlayer);

  const playerXCells = writable<number[]>([]);
  const playerOCells = writable<number[]>([]);

  // derived winner from player cells
  const winner = derived([playerXCells, playerOCells], (playerCells) => {
    const players = [
      { index: 0, player: "X" },
      { index: 1, player: "O" },
    ];
    for (const { index, player } of players) {
      const cells = hasAligned(playerCells[index]);
      if (cells) return { player, cells } as Winner;
    }
  });

  const endGame = derived(
    [winner, playerXCells, playerOCells],
    ([$winner, $playerXCells, $playerOCells]) => {
      if ($winner !== undefined) return true;
      if ($playerXCells.length + $playerOCells.length === 9) return true;
      return false;
    }
  );

  // react to cells changes and register it in lastChoice
  cells.map((cell, index) => {
    cell.subscribe((value) => {
      if (value !== " ") {
        nextPlayer.update(($nextPlayer) => {
          return $nextPlayer === "X" ? "O" : "X";
        });
        lastChoice.set({ index, value });
        const player = value === "X" ? playerXCells : playerOCells;
        player.update(($cells) => [...$cells, index]);
      }
    });
  });

  return {
    cells,
    lastChoice,
    nextPlayer,
    winner,
    endGame,
  };
}

/**
 * Board store wrapper proxyfied access to cells data in read only
 */
export function createBoardStore(initialPlayer: Player = "X") {
  const boardStores = createBoardInternalStores(initialPlayer);
  const { nextPlayer, cells, endGame, lastChoice, winner } = boardStores;

  const boardStore = derived(
    [nextPlayer, endGame, lastChoice, winner],
    ([nextPlayer, endGame, lastChoice, winner]) => ({
      nextPlayer,
      endGame,
      lastChoice,
      winner,
    })
  );

  return new Proxy(
    { ...boardStore },
    {
      get(target, property) {
        // wrapper
        if (Object.getOwnPropertyNames(target).includes(property.toString())) {
          return target[property as keyof typeof target];
        }

        return cells[property as keyof typeof cells];
      },
    }
  ) as CellTuple<9> & typeof boardStore;
}
