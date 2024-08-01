<script lang="ts">
  import Button from "$lib/components/base/Button.svelte";
  import Icon from "$lib/components/base/Icon.svelte";
  import { boardStore, resetBoardStore } from "$stores/Board";
  import { clearGameEvent, gameEvent } from "$stores/GameMenu";
  import { gameSettingStore } from "$stores/GameSetting";

  let dialog: HTMLDialogElement;

  $: if (dialog) {
    switch ($gameEvent) {
      case "RestartRequested":
      case "GameEnded":
        dialog.showModal();
        break;
      default:
        dialog.open && dialog.close();
        break;
    }
  }
  $: board = $boardStore;
</script>

<dialog bind:this={dialog}>
  {#if $board.winner}
    <div class="game-ended">
      <div
        style={`--color: var(--light-${$board.winner.player === "X" ? "blue" : "yellow"})`}
      >
        <span
          >PLAYER {$gameSettingStore.playerOne === $board.winner.player ? 1 : 2}
          WINS!</span
        >
        <span><Icon name={$board.winner.player} /> TAKE THE ROUND</span>
      </div>
      <Button aria-label="quit" class="no" on:click={clearGameEvent}>
        QUIT
      </Button>
      <Button
        aria-label="confirm"
        class="yes button-yellow"
        on:click={() => resetBoardStore()}
      >
        NEXT ROUND
      </Button>
    </div>
  {:else}
    <div class="game-restart">
      <span>Restart Game?</span>
      <Button aria-label="cancel" class="no" on:click={clearGameEvent}
        >NO, CANCEL</Button
      >
      <Button
        aria-label="confirm"
        class="yes button-yellow"
        on:click={() => resetBoardStore()}
      >
        YES, RESTART
      </Button>
    </div>
  {/if}
</dialog>

<button></button>

<style>
  dialog[open] {
    width: 100%;
    height: 266px;
    display: grid;
    place-items: center;
    background-color: var(--semi-dark-navy);
    color: var(--silver);
    border: none;
    text-transform: uppercase;

    & .game-restart,
    .game-ended {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "title title"
        "no yes";
      row-gap: 20px;
      column-gap: 16px;
      font-weight: 700;

      & span {
        font-size: 40px;
        letter-spacing: 2.5px;
        grid-area: title;
      }

      & > .button {
        --width: 139px;
        --height: 52px;
        color: var(--dark-navy);

        &.no {
          grid-area: no;
          justify-self: end;
        }

        &.yes {
          grid-area: yes;
        }
      }
    }

    & .game-ended {
      & > div {
        grid-area: title;
        display: grid;
        grid-template-columns: 1fr;
        font-weight: 700;

        & span:first-child {
          font-size: 16px;
        }
        & span:last-child {
          position: relative;
          display: flex;
          align-items: center;
          font-size: 40px;
          letter-spacing: 2.5px;
          margin: 16px 0;
          color: var(--color);
          & svg {
            position: absolute;
            left: -88px;
            & path {
              fill: var(--color);
            }
          }
        }
      }
    }
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 600px) {
    dialog[open] {
      height: 228px;
    }
  }
</style>
