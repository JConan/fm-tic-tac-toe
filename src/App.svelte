<script lang="ts">
  import "the-new-css-reset/css/reset.css";
  import "@fontsource-variable/outfit";
  import favico from "/assets/favicon-32x32.png";
  import TicTacToe from "$lib/components/TicTacToe.svelte";
  import { gameSettingStore } from "$stores/GameSetting";
  import { inlineSvg } from "@svelte-put/inline-svg";
  import Icon from "$lib/components/base/Icon.svelte";
  import Button from "$lib/components/base/Button.svelte";
  import { boardStore, resetBoardStore } from "$stores/Board";

  function toggleMark() {
    gameSettingStore.setPlayerOne(
      $gameSettingStore.playerOne === "X" ? "O" : "X"
    );
  }

  function start(mode: "CPU" | "Human") {
    return () => {
      gameSettingStore.setOpponent(mode);
      resetBoardStore();
    };
  }
</script>

<svelte:head>
  <title>Tic Tac Toe</title>
  <link rel="icon" type="image/png" href={favico} />
</svelte:head>

{#if $boardStore}
  <TicTacToe />
{:else}
  <div class="container">
    <svg class="logo" use:inlineSvg={"assets/logo.svg"} viewBox="0 0 72 32" />
    <div class="mark-selector">
      <Button class="button-semi-dark" disabled>
        <span>PICK PLAYER 1'S MARK</span>
        <button class="slider-background" on:click={toggleMark}>
          <div
            class={`cursor ${$gameSettingStore.playerOne === "X" ? "left" : "right"}`}
          >
            <div>
              <Icon name="X" color="silver" outlined />
              <Icon name="O" color="silver" outlined />
            </div>
          </div>

          <Icon name="X" color="silver" />
          <Icon name="O" color="silver" />
        </button>
        <span>REMEMBER : X GOES FIRST</span>
      </Button>
    </div>
    <div class="buttons">
      <Button class="button-yellow" on:click={start("CPU")}
        >NEW GAME (VS CPU)</Button
      >
      <Button class="button-blue" on:click={start("Human")}
        >NEW GAME (VS PLAYER)</Button
      >
    </div>
  </div>
{/if}

<style>
  .container {
    display: grid;
    gap: 40px;
    place-items: center;

    & .mark-selector {
      color: var(--silver);

      & > .button {
        --width: 460px;
        --height: 205px;

        & svg {
          width: 40px;
          height: 40px;
        }
      }

      & .slider-background {
        position: relative;
        width: calc(198px * 2);
        height: 54px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 0 0 8px var(--dark-navy);

        & .cursor {
          position: absolute;
          transition: left 0.5s;
          width: 198px;
          height: 54px;
          left: 198px;
          overflow: hidden;

          & > div {
            transition: margin-left 0.5s;
          }

          &.left {
            left: 0px;
            & > div {
              margin-left: 0px;
            }
          }

          &.right {
            left: 198px;
            & > div {
              margin-left: -198px;
            }
          }

          & > div {
            background-color: var(--silver);
            box-shadow: 0px -4px 0px 0px var(--silver) inset;
            width: calc(198px * 2);
            height: 54px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
      }

      & span:last-child {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.5;
        align-self: normal;
      }
    }

    & .buttons {
      display: grid;
      gap: 20px;
      & button {
        --width: 460px;
        --height: 67px;
      }
    }
  }
  @media (max-width: 600px) {
    .container {
      gap: 32px;
    }

    .container .mark-selector :global(.button svg) {
      width: 32px;
      height: 32px;
    }

    .container .mark-selector :global(.button) {
      --width: 327px !important;
      --height: 205px !important;
    }

    .container :global(.buttons .button) {
      --width: 327px !important;
      --height: 56px !important;
    }

    .container .mark-selector .slider-background,
    .container .mark-selector .slider-background .cursor > div {
      width: calc(132px * 2);
      height: 54px;
    }

    .container .mark-selector .slider-background .cursor {
      width: 132px;
      height: 54px;
    }

    .container .mark-selector .slider-background .cursor.right {
      left: 132px;
    }
    .container .mark-selector .slider-background .cursor.right > div {
      margin-left: -132px;
    }
  }
</style>
