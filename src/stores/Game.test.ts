import { get } from "svelte/store";
import { gameStore, reset, selectCellAt } from "./Game";

describe("Game state management", () => {
  it("should have an initial state", () => {
    const gameState = get(gameStore);
    expect(gameState.cells.join("")).toBe("         ");
  });

  it("should be able to define custom state", () => {
    reset({ state: " X O     " });
    const gameState = get(gameStore);
    expect(gameState.cells.join("")).toBe(" X O     ");
  });

  it("should have X as initial next player", () => {
    reset();
    const gameState = get(gameStore);
    expect(gameState.nextPlayer).toBe("X");
  });

  it("should be able to start with O", () => {
    reset({ player: "O" });
    const gameState = get(gameStore);
    expect(gameState.nextPlayer).toBe("O");
  });

  it("should able to update cell with the correct value after each click", () => {
    reset();
    [0, 1, 2, 4].map((index) => {
      selectCellAt(index);
    });
    const cellsState = get(gameStore).cells;
    expect(cellsState.slice(0, 5)).toEqual(["X", "O", "X", " ", "O"]);
  });

  it.each([
    ["row 1", "XXX      ", "X", [0, 1, 2]],
    ["row 2", "   OOO   ", "O", [3, 4, 5]],
    ["row 3", "   OXOXXX", "X", [6, 7, 8]],
    ["column 1", "X  X  X  ", "X", [0, 3, 6]],
    ["column 2", " X  X  X ", "X", [1, 4, 7]],
    ["column 3", "  X  X  X", "X", [2, 5, 8]],
    ["\\", "X   X   X", "X", [0, 4, 8]],
    ["/", "  X X X  ", "X", [2, 4, 6]],
  ])(
    "should be able to detect winning line %s",
    (_, state, expectedWinner, expectedCells) => {
      reset({ state });
      const { player, cells } = get(gameStore).winner;
      expect(player).toBe(expectedWinner);
      expect(cells).toEqual(expectedCells);

      reset();
      expect(get(gameStore).winner.player).toBeUndefined();
    }
  );

  it("should correctly update state when reset after a winning game", () => {
    reset({ state: "XXX      " });
    expect(get(gameStore).winner.player).toBeDefined();
    expect(get(gameStore).winner.cells).toBeDefined();

    reset();
    expect(get(gameStore).winner.player).toBeUndefined();
    expect(get(gameStore).winner.cells).toBeUndefined();
  });
});
