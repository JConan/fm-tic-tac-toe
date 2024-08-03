import { derived, get, writable } from "svelte/store";
import { boardStore } from "./Board";
import { gameSettingStore } from "./GameSetting";

export type GameScore = {
  playerOne: number;
  playerTwo: number;
  tie: number;
};

const initialState = {
  playerOne: 0,
  playerTwo: 0,
  tie: 0,
};

function createGameScoreStore() {
  const { set, update, subscribe } = writable<GameScore>(initialState);

  function reset() {
    set(initialState);
    console.log({ score: get({ subscribe }) });
  }

  boardStore.subscribe((board) => {
    board &&
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
    reset,
  };
}

export let gameScoreStore = createGameScoreStore();
