<script lang="ts">
  import "./Button.css";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends HTMLButtonAttributes {
    width?: number;
    height?: number;
  }
</script>

<button
  {...$$restProps}
  class={`button ${$$props["class"] ?? ""}`}
  on:click
  on:mouseenter
  on:mouseleave
  on:focus
  on:blur
>
  <div><slot /></div>
</button>

<style>
  .button {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius, 10px);

    & div {
      width: var(--width);
      height: var(--height);
      position: absolute;
      top: 0;
      left: 0;
      display: grid;
      place-items: center;
      transition: all 0.1s;
      border-radius: var(--border-radius, 10px);
      background-color: var(--background-color);
      box-shadow: 0px -4px 0px 0px var(--box-shadow-color) inset;
    }

    &:not([disabled]) div:hover {
      top: calc(0px - var(--hovering-height));
      background-color: var(--hovering-background-color);
      height: calc(var(--height) + var(--hovering-height));
      box-shadow: 0px calc(-4px - var(--hovering-height)) 0px 0px
        var(--box-shadow-color) inset;
    }
    &.button-blue {
      --background-color: var(--light-blue);
      --box-shadow-color: var(--shadow-blue);
      --hovering-background-color: var(--light-blue-hover);
    }

    &.button-yellow {
      --background-color: var(--light-yellow);
      --box-shadow-color: var(--shadow-yellow);
      --hovering-background-color: var(--light-yellow-hover);
    }

    &.button-silver {
      --background-color: var(--silver);
      --box-shadow-color: var(--shadow-silver);
      --hovering-background-color: var(--silver-hover);
    }

    &.button-dark {
      --background-color: var(--dark-navy);
      --box-shadow-color: var(--shadow-dark-navy);
      --hovering-background-color: var(--dark-navy-hover);
    }
    &.button-semi-dark {
      --background-color: var(--semi-dark-navy);
      --box-shadow-color: var(--shadow-semi-dark-navy);
      --hovering-background-color: var(--semi-dark-navy-hover);
    }
  }
</style>
