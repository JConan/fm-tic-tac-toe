import { get } from "svelte/store";
import { createBoard } from "./Board";

describe("Game board store and function", () => {
  it("should be empty at initial state", () => {
    const { board } = createBoard();

    const state = get<string[]>(board);
    expect(state).toHaveLength(9);
    expect(state.filter((cell) => cell !== " ")).toHaveLength(0);
  });

  it("should be able to reset state", () => {
    const { board } = createBoard();
    board.setState("XOX   OXO");

    let state = get(board);
    expect(state.join("")).toBe("XOX   OXO");

    board.reset();
    state = get(board);
    expect(state.join("")).toBe("         ");
  });

  it("should be able to update a cell", () => {
    const { board } = createBoard();

    expect(board.setCell(5, "X")).toBe(true);
    const state = get<string[]>(board);

    expect(state[5]).toBe("X");
  });

  it.each([
    ["X", "         "],
    ["O", "        X"],
    ["X", "       OX"],
    ["O", "      XOX"],
  ])(
    'should tell next player should be "%s" in case "%s"',
    (expected, testState) => {
      const { board } = createBoard();
      board.setState(testState);
      expect(board.nextPlayer()).toBe(expected);
    }
  );

  it("should not be allowed to update cell if already set", () => {
    const { board } = createBoard();
    board.setState("     X   ");

    const state = get<string[]>(board);
    expect(state[5]).toBe("X");
    expect(board.setCell(5, "X")).toBe(false);
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
    (_, initialState, expectedWinner, expectedCells) => {
      const { winner, setState } = createBoard();
      setState(initialState);
      expect(get(winner).winner).toBe(expectedWinner);
      expect(get(winner).cells).toStrictEqual(expectedCells);
    }
  );
});
