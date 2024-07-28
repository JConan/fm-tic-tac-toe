import { get } from "svelte/store";
import { createBoardStore, createCellStore, hasAligned } from "./Board";

describe("simple cell state", () => {
  it("has empty value as initial state", () => {
    const cellStore = createCellStore();
    expect(get(cellStore)).toBe(" ");
  });

  it("should be able to set a new value", () => {
    const cellStore = createCellStore();
    cellStore.set("X");
    expect(get(cellStore)).toBe("X");
  });

  it("should not be able to modify a non empty cell", () => {
    const cellStore = createCellStore();
    cellStore.set("O");
    cellStore.set("X");
    expect(get(cellStore)).toBe("O");
  });

  it("should be able to be reset", () => {
    const cellStore = createCellStore();
    cellStore.set("X");
    cellStore.reset();
    expect(get(cellStore)).toBe(" ");
  });
});

describe("calculation utilities", () => {
  it.each([
    [
      [0, 1, 2],
      [0, 1, 2, 3, 4],
    ],
    [null, [0, 1, 3]],
    [
      [1, 4, 7],
      [0, 1, 3, 4, 7],
    ],
  ])(
    "should yiels %s when testing for aligned indexes %s",
    (expected, indexes) => {
      const result = hasAligned(indexes);
      expect(result).toStrictEqual(expected);
    }
  );
});

describe("board interaction", () => {
  it("should able to select a cell only once", () => {
    const board = createBoardStore();
    board.select(0);
    board.select(0);

    expect(get(board[0])).toBe("X");
    expect(get(board).lastChoice).toStrictEqual({ index: 0, value: "X" });
    expect(get(board).nextPlayer).toBe("O");
  });

  it.each([
    [[0, 3, 1, 4, 2], { player: "X", cells: [0, 1, 2] }],
    [[4, 0, 3, 1, 7, 2], { player: "O", cells: [0, 1, 2] }],
  ])("should be able to detect winning line", (indexes, winner) => {
    const board = createBoardStore();
    indexes.map(board.select);

    board[0] = createCellStore();

    expect(get(board).winner).toStrictEqual(winner);
  });
});
