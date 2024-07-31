import { writable } from "svelte/store";
import type { Player } from "./Board";

export type GameSetting = {
  playerOne: Player;
  playerTwo: "CPU" | "Human";
};

function createGameSettingStore() {
  const { set, update, subscribe } = writable<GameSetting>({
    playerOne: "X",
    playerTwo: "CPU",
  });

  return {
    subscribe,
    setPlayerOne(playerOne: Player) {
      update(($setting) => ({ ...$setting, playerOne }));
    },
    setOpponent(playerTwo: GameSetting["playerTwo"]) {
      update(($setting) => ({ ...$setting, playerTwo }));
    },
  };
}

export const gameSettingStore = createGameSettingStore();
