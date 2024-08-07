import { render, within } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Cell from "./Cell.svelte";
import { get } from "svelte/store";
import { resetBoardStore, type Player } from "$stores/Board";

describe("cell base state", () => {
  function renderCell(nextPlayer: Player = "X") {
    const board = get(resetBoardStore(nextPlayer));
    return { ...render(Cell, { index: 0 }), board };
  }

  it("should able to render empty cell", () => {
    const { getByRole } = renderCell();
    const cell = getByRole("cell");
    expect(cell).toBeInTheDocument();
  });

  it("should able to render cell X", async () => {
    const { getByRole } = renderCell();
    const cell = getByRole("cell");

    await userEvent.click(cell);
    const image = within(cell).getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("data-name")).toBe("X");
    expect(image.getAttribute("data-outlined")).toBe("false");
  });

  it("should able to hover the cell with X as nextplayer", async () => {
    const { getByRole } = renderCell();
    const cell = getByRole("cell");

    await userEvent.hover(cell);
    const image = within(cell).getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("data-name")).toBe("X");
    expect(image.getAttribute("data-outlined")).toBe("true");
  });
});
