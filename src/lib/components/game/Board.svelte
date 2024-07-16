<script lang="ts">
  import Cell from "./Cell.svelte";
  import type { InGameMenuData } from "../ui/InGameMenu";
  import InGameMenu from "../ui/InGameMenu.svelte";
  import ScoreBar from "../ui/ScoreBar.svelte";
  import { gameStore, reset } from "$stores/Game";
  import Button from "../base/Button.svelte";

  let data: InGameMenuData;
  function onRestart() {
    data = {
      question: "Restart Game?",
      cancelLabel: "No, cancel",
      validateLabel: "Yes, restart",
      choiceHandler(userChoice) {
        if (userChoice) {
          reset();
        }
      },
    };
  }
</script>

<table>
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
        <span>{$gameStore.nextPlayer} TURN</span>
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
      {#each Array(3) as _, index}
        <Cell {index} />
      {/each}
    </tr>
    <tr>
      {#each Array(3) as _, index}
        <Cell index={index + 3} />
      {/each}
    </tr>
    <tr>
      {#each Array(3) as _, index}
        <Cell index={index + 6} />
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
