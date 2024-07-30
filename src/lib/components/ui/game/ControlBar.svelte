<script>
  import Button from "$lib/components/base/Button.svelte";
  import Icon from "$lib/components/base/Icon.svelte";
  import { resetBoardStore, boardStore } from "$stores/Board";
  import { inlineSvg } from "@svelte-put/inline-svg";

  $: board = $boardStore;
</script>

<header>
  <svg use:inlineSvg={"assets/logo.svg"} viewBox="0 0 72 32" />
  <Button class="next-player button-semi-dark" disabled>
    <span>
      <Icon name={$board.nextPlayer} color="silver" />
      TURN
    </span>
  </Button>
  <Button class="restart" on:click={() => resetBoardStore()}>
    <svg use:inlineSvg={"assets/icon-restart.svg"} />
  </Button>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px;
    align-items: ce;

    & > *:last-child {
      justify-self: end;
    }
  }

  :global(.button.next-player) {
    --width: 140px;
    --height: 52px;
    color: var(--silver);
    font-weight: 700;

    & span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & svg {
      width: 20px;
      height: 20px;
      margin-right: 0.65rem;
    }
  }
  :global(.button.restart) {
    --width: 52px;
    --height: 52px;
  }

  @media (max-width: 600px) {
    :global(.button.next-player) {
      --width: 96px;
      --height: 40px;
      font-size: 14px;
    }

    :global(.button.next-player svg) {
      width: 16px;
      height: 16px;
    }

    :global(.button.restart) {
      --width: 40px;
      --height: 40px;
    }
  }
</style>
