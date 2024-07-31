import { derived, get, writable } from "svelte/store";
import { boardStore } from "./Board";
import { gameSettingStore } from "./GameSetting";

export type GameScore = {
  playerOne: number;
  playerTwo: number;
  tie: number;
};

function createGameScoreStore() {
  const { set, update, subscribe } = writable<GameScore>({
    playerOne: 0,
    playerTwo: 0,
    tie: 0,
  });

  boardStore.subscribe((board) => {
    derived([board, gameSettingStore], (stores) => stores).subscribe(
      ([$boardState, $gameSetting]) => {
        if ($boardState.endGame) {
          update(($score) => {
            const score = { ...$score };
            if ($boardState.winner) {
              if ($gameSetting.playerOne === $boardState.winner?.player) {
                score.playerOne++;
              } else {
                score.playerTwo++;
              }
            } else {
              score.tie++;
            }
            return score;
          });
        }
      }
    );
  });

  return {
    subscribe,
    reset() {
      set({
        playerOne: 0,
        playerTwo: 0,
        tie: 0,
      });
    },
  };
}

export let gameScoreStore = createGameScoreStore();
