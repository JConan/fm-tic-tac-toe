import { render, within } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Board from "./Board.svelte";
import { boardStore, resetBoardStore } from "$stores/Board";
import { get } from "svelte/store";
import { gameSettingStore } from "$stores/GameSetting";

describe("board rendering", () => {
  beforeEach(() => {
    gameSettingStore.setOpponent("Human");
    resetBoardStore();
  });

  it("should render the board", () => {
    const { getAllByRole } = render(Board);

    const cells = getAllByRole("cell");
    expect(cells).toHaveLength(9);
  });

  it("should stop receive cell selection in endgame", async () => {
    const { getAllByRole } = render(Board);

    const cells = getAllByRole("cell");
    for (let index of [0, 3, 1, 4, 2]) {
      const cell = cells[index];
      await userEvent.click(cell);
      const result = within(cell).queryByRole("img");
      expect(result).toBeDefined();
    }

    // endgame
    expect(get(get(boardStore)!).endGame).toBe(true);

    const cell = cells[5];
    await userEvent.click(cell);
    const result = within(cell).queryByRole("img");

    expect(result).toBeNull();
  });
});
