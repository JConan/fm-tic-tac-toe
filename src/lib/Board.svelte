<script lang="ts">
  import { board } from "$stores/Board";
  import Button from "./Button.svelte";
  import Cell from "./Cell.svelte";
  import type { InGameMenuData } from "./InGameMenu";
  import InGameMenu from "./InGameMenu.svelte";
  import ScoreBar from "./ScoreBar.svelte";
  const X_outline = `${import.meta.env.BASE_URL}assets/icon-x-outline.svg`;
  const O_outline = `${import.meta.env.BASE_URL}assets/icon-o-outline.svg`;

  let data: InGameMenuData;

  $: line1 = $board.slice(0, 3);
  $: line2 = $board.slice(3, 6);
  $: line3 = $board.slice(6, 9);

  let nextPlayer: "X" | "O" = board.nextPlayer();

  const clickCell = (index: number) => () => {
    board.setCell(index, nextPlayer);
    nextPlayer = board.nextPlayer();
  };

  $: hoverImage = nextPlayer === "X" ? X_outline : O_outline;

  function onRestart() {
    data = {
      question: "Restart Game?",
      cancelLabel: "No, cancel",
      validateLabel: "Yes, restart",
      choiceHandler(userChoice) {
        if (userChoice) {
          board.reset();
          nextPlayer = board.nextPlayer();
        }
      },
    };
  }
</script>

<table style="--hover-image: url({hoverImage})">
  <thead>
    <tr>
      <th>
        <img
          src="{import.meta.env.BASE_URL}assets/logo.svg"
          alt="logo"
          height="32"
        />
      </th>
      <th>
        <span>{nextPlayer} TURN</span>
      </th>
      <th>
        <Button on:click={onRestart} color="light-silver" width={52}>
          <img
            src="{import.meta.env.BASE_URL}assets/icon-restart.svg"
            alt="restart"
          />
        </Button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {#each line1 as cellValue, index}
        <Cell on:click={clickCell(index)} {cellValue} bind:hoverImage />
      {/each}
    </tr>
    <tr>
      {#each line2 as cellValue, index}
        <Cell on:click={clickCell(index + 3)} {cellValue} bind:hoverImage />
      {/each}
    </tr>
    <tr>
      {#each line3 as cellValue, index}
        <Cell on:click={clickCell(index + 6)} {cellValue} bind:hoverImage />
      {/each}
    </tr>
  </tbody>
  <ScoreBar />
</table>

<InGameMenu {data} />

<style>
  table {
    border-collapse: separate;
    border-spacing: 20px;

    & thead {
      & th {
        vertical-align: middle;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
        & span {
          width: 140px;
          height: 52px;
          border-radius: 10px;
          background: var(--Semi-Dark-Navy, #1f3641);
          box-shadow: 0px -4px 0px 0px #10212a inset;
          color: var(--Silver, #a8bfc9);
          font-weight: 700;
          font-size: 16px;
          display: grid;
          place-items: center;
        }
      }
    }

    & tbody tr {
      position: relative;
    }
  }
</style>
