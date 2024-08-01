import { get } from "svelte/store";
import { clearGameEvent, gameEvent, restartGame } from "./GameMenu";
import { runSequence } from "./GameScore.test";

describe("Game Menu", () => {
  afterEach(clearGameEvent);

  it("should received restart request event", () => {
    restartGame();
    expect(get(gameEvent)).toBe("RestartRequested");
  });

  it("should received game ended", () => {
    runSequence([0, 3, 1, 4, 2]);
    expect(get(gameEvent)).toBe("GameEnded");
  });
});
