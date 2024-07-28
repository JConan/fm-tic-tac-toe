import { get } from "svelte/store";
import { createBoard, createCellStore, is_adajcent } from "./Board";

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
});

describe("adjacent indexes", () => {
  it.each([
    [true, 0, 1],
    [false, 0, 2],
    [true, 0, 3],
    [true, 0, 4],
    [false, 0, 5],
    [false, 0, 6],
    [false, 0, 7],
    [false, 0, 8],
    [true, 4, 8],
    [true, 4, 1],
    [true, 4, 3],
  ])(
    "should yiels %s when testing for adjacency indexes %s and %s",
    (expected, index_a, index_b) => {
      expect(is_adajcent(index_a, index_b)).toBe(expected);
    }
  );
});

describe("board interaction", () => {
  it("should able to tell previous move", () => {
    const board = createBoard();
    board.cells[0].set("X");

    expect(get(board.lastChoice)).toStrictEqual({ index: 0, value: "X" });
  });
});
