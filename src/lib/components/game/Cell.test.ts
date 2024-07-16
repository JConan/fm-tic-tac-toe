import { fireEvent, render } from "@testing-library/svelte";
import Cell from "./Cell.svelte";
import { gameStore, reset } from "$stores/Game";
import type { ResetOptions } from "$stores/types";
import { get } from "svelte/store";

describe("cell component", () => {
  function renderCell(index: number, options: ResetOptions = {}) {
    reset(options);
    return render(Cell, { index });
  }

  it.each([
    [
      "starting with X",
      { index: 0, options: { player: "X" } },
      { clicked: { before: " ", after: "X" } },
    ],
    [
      "starting with O",
      { index: 1, options: { player: "O" } },
      { clicked: { before: " ", after: "O" } },
    ],
    [
      "no effect as already clicked",
      { index: 0, options: { player: "X", state: "OXO      " } },
      { clicked: { before: "O", after: "O" } },
    ],
  ])("render scenario - %s", async (_, { index, options }, expected) => {
    const { getAllByRole } = renderCell(index, (options as ResetOptions) ?? {});
    const cell = getAllByRole("cell")[0];
    expect(cell).toBeInTheDocument();
    expect(cell.getAttribute("data-cell")).toBe(expected.clicked.before);
    expect(get(gameStore).cells[index]).toBe(expected.clicked.before);

    await fireEvent.click(cell);
    expect(cell.getAttribute("data-cell")).toBe(expected.clicked.after);
    expect(get(gameStore).cells[index]).toBe(expected.clicked.after);
  });

  it("should not be clickable in a winning game", async () => {
    const { getAllByRole } = renderCell(0, { state: "   XXX   " });
    const cell = getAllByRole("cell")[0];

    await fireEvent.click(cell);
    expect(cell.getAttribute("data-cell")).toBe(" ");
  });
});
