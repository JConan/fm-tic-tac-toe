import { fireEvent, render } from "@testing-library/svelte";
import Board__SvelteComponent_ from "./Board.svelte";
import { board } from "$stores/Board";
import fs from "fs";
import path from "path";

// Utility function to read file content
const readFileContent = (filePath: string) => {
  return fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
};

// Mocking fetch globally
beforeAll(() => {
  global.fetch = vi.fn((url, options) => {
    // Check if the URL starts with '/assets'
    if (url.startsWith("assets")) {
      // Modify the URL to add '/public' prefix
      url = `../../public/${url}`;
      const response = new Response(readFileContent(url), {
        status: 200,
        headers: { "Content-Type": "image/svg+xml" },
      });
      return Promise.resolve(response);
    }

    return Promise.reject(new Error("Unknown URL"));
  });
});

describe("board component", () => {
  it("should show empty grid", () => {
    board.reset();
    const { getAllByRole } = render(Board__SvelteComponent_);
    const cells = getAllByRole("cell");
    expect(cells).toHaveLength(9);
    expect(cells.map((cell) => cell.getAttribute("data-cell")).join("")).toBe(
      "         "
    );
  });

  it("should display as the store", () => {
    board.setState("XOX  OXO");
    const { getAllByRole } = render(Board__SvelteComponent_);
    const cells = getAllByRole("cell");

    expect(cells.map((cell) => cell.getAttribute("data-cell")).join("")).toBe(
      "XOX  OXO"
    );
  });

  it("should be updated after a click", async () => {
    board.reset();
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
