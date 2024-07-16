import { fireEvent, render } from "@testing-library/svelte";
import Board__SvelteComponent_ from "./Board.svelte";
import { reset } from "$stores/Game";

describe("board component", () => {
  it("should show empty grid", () => {
    const { getAllByRole } = render(Board__SvelteComponent_);
    const cells = getAllByRole("cell");
    expect(cells).toHaveLength(9);
    expect(cells.map((cell) => cell.getAttribute("data-cell")).join("")).toBe(
      "         "
    );
  });

  it("should display as the store", () => {
    reset({ state: "XOX   OXO" });
    const { getAllByRole } = render(Board__SvelteComponent_);
    const cells = getAllByRole("cell");

    expect(cells.map((cell) => cell.getAttribute("data-cell")).join("")).toBe(
      "XOX   OXO"
    );
  });

  it("should be updated after a click", async () => {
    reset();
    const { getAllByRole } = render(Board__SvelteComponent_);
    const cells = getAllByRole("cell");

    expect(cells[0].getAttribute("data-cell")).toBe(" ");

    await fireEvent.click(cells[0]);
    expect(cells[0].getAttribute("data-cell")).toBe("X");

    await fireEvent.click(cells[3]);
    expect(cells[3].getAttribute("data-cell")).toBe("O");

    await fireEvent.click(cells[6]);
    expect(cells[6].getAttribute("data-cell")).toBe("X");
  });
});
