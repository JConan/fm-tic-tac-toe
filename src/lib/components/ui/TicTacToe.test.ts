import { cleanup, render, screen } from "@testing-library/svelte";
import TicTacToe from "./TicTacToe.svelte";
import userEvent from "@testing-library/user-event";
import { get } from "svelte/store";
import { clearGameEvent, gameEvent } from "$stores/GameMenu";
import { boardStore } from "$stores/Board";

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

  describe("restart request", () => {
    beforeEach(() => {
      clearGameEvent();
    });

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
});
