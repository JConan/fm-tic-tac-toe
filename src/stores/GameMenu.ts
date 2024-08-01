import { writable } from "svelte/store";
import { boardStore } from "./Board";

export type GameEvent = "RestartRequested" | "GameEnded";

const { set, update, subscribe } = writable<GameEvent | undefined>();

boardStore.subscribe((board) => {
  set(undefined);

  board.subscribe(($boardState) => {
    if ($boardState.endGame) set("GameEnded");
  });
});

export const gameEvent = { subscribe };

export function restartGame() {
  set("RestartRequested");
}

export function clearGameEvent() {
  set(undefined);
}
