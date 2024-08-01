import { render, screen, within } from "@testing-library/svelte";
import TicTacToe from "./TicTacToe.svelte";
import userEvent from "@testing-library/user-event";
import { get } from "svelte/store";
import { clearGameEvent, gameEvent } from "$stores/GameMenu";
import { boardStore, resetBoardStore } from "$stores/Board";

describe("Tic Tac Toe integration", () => {
  function renderTicTacToe() {
    render(TicTacToe);
    document.querySelectorAll("dialog").forEach((dialog) => {
      dialog.showModal = () => {
        dialog.open = true;
      };
      dialog.close = () => {
        dialog.open = false;
      };
    });
  }

  async function runEndgameSequance(indexes: number[]) {
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(9);

    for (let index of indexes) {
      await userEvent.click(cells[index]);
    }
    expect(get(get(boardStore)).endGame).toBe(true);
  }

  beforeEach(() => {
    clearGameEvent();
  });

  describe("restart request", () => {
    it("should be shown as a modal message", async () => {
      renderTicTacToe();
      await userEvent.click(screen.getByRole("button", { name: /restart/i }));

      expect(get(gameEvent)).toBe("RestartRequested");
      expect(screen.getByRole("dialog")).toHaveTextContent(/restart game/i);
    });

    it("should able to cancel request", async () => {
      renderTicTacToe();
      await userEvent.click(screen.getByRole("button", { name: /restart/i }));
      expect(screen.queryByRole("dialog")).not.toBeNull();

      await userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      expect(get(gameEvent)).toBe(undefined);
      expect(screen.queryByRole("dialog")).toBeNull();
    });

    it("should able to confirm request", async () => {
      renderTicTacToe();
      await userEvent.click(screen.getByRole("button", { name: /restart/i }));
      expect(screen.queryByRole("dialog")).not.toBeNull();

      await userEvent.click(screen.getByRole("button", { name: /confirm/i }));
      expect(get(gameEvent)).toBe(undefined);
      expect(screen.queryByRole("dialog")).toBeNull();
    });

    it("should not have change board state on cancellation", async () => {
      renderTicTacToe();
      await userEvent.click(screen.getByRole("button", { name: /restart/i }));

      const $boarsStore = get(boardStore);
      await userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      expect(get(boardStore)).toBe($boarsStore);
    });

    it("should have change board state on confirmation", async () => {
      renderTicTacToe();
      await userEvent.click(screen.getByRole("button", { name: /restart/i }));

      const $boarsStore = get(boardStore);
      await userEvent.click(screen.getByRole("button", { name: /confirm/i }));
      expect(get(boardStore)).not.toBe($boarsStore);
    });
  });

  describe("end game message", () => {
    it("should show a modal message for winner X", async () => {
      resetBoardStore("X");
      renderTicTacToe();
      await runEndgameSequance([0, 3, 1, 4, 2]);
      const dialog = screen.queryByRole("dialog");
      expect(dialog).not.toBeNull();

      expect(dialog).toHaveTextContent(/player 1 wins/i);
      expect(dialog).toHaveTextContent(/take the round/i);
      const svg = within(dialog!).getByRole("img");
      expect(svg).toHaveAttribute("data-name", "X");
    });
    it("should show a modal message for winner O", async () => {
      resetBoardStore("X");
      renderTicTacToe();
      await runEndgameSequance([0, 3, 1, 4, 6, 5]);
      const dialog = screen.queryByRole("dialog");
      expect(dialog).not.toBeNull();

      expect(dialog).toHaveTextContent(/player 2 wins/i);
      expect(dialog).toHaveTextContent(/take the round/i);
      const svg = within(dialog!).getByRole("img");
      expect(svg).toHaveAttribute("data-name", "O");
    });
    it("should show a modal message for a tie", async () => {
      resetBoardStore("X");
      renderTicTacToe();
      await runEndgameSequance([0, 1, 2, 6, 7, 8, 3, 4, 5]);
      const dialog = screen.queryByRole("dialog");
      expect(dialog).not.toBeNull();

      expect(dialog).toHaveTextContent(/round tied/i);
      expect(within(dialog!).queryByRole("img")).toBeNull();
    });
  });
});
