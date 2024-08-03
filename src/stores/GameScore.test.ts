import { get } from "svelte/store";
import { gameScoreStore } from "./GameScore";
import { resetBoardStore } from "./Board";

export function runSequence(indexes: number[]) {
  const board = resetBoardStore("X");
  for (let index of indexes) {
    board.select(index);
  }
  return board;
}

describe("GameScore Store", () => {
  it("should increment PlayerOne when X win the game", () => {
    runSequence([0, 3, 1, 4, 2]);

    const gameScoreState = get(gameScoreStore);
    expect(gameScoreState.playerOne).toBe(1);
  });

  it("should increment PlayerOne when O win the game", () => {
    runSequence([0, 3, 1, 4, 6, 5]);

    const gameScoreState = get(gameScoreStore);
    expect(gameScoreState.playerTwo).toBe(1);
  });

  it("should have tie when there is no winner", () => {
    runSequence([0, 1, 2, 6, 7, 8, 3, 4, 5]);

    const gameScoreState = get(gameScoreStore);
    expect(gameScoreState.tie).toBe(1);
  });
});
