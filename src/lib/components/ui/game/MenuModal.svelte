<script lang="ts">
  import Button from "$lib/components/base/Button.svelte";
  import { resetBoardStore } from "$stores/Board";
  import { clearGameEvent, gameEvent } from "$stores/GameMenu";

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
</script>

<dialog bind:this={dialog}>
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

    & .game-restart {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "title title"
        "no yes";
      row-gap: 30px;
      column-gap: 16px;
      font-weight: 700;

      & span {
        font-size: 40px;
        grid-area: title;
      }

      & .button {
        --width: 139px;
        --height: 52px;
        color: var(--dark-navy);

        &:first-child {
          grid-area: no;
        }
        &:last-child {
          grid-area: yes;
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
