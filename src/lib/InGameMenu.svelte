<script lang="ts">
  import Button from "./Button.svelte";
  import type { InGameMenuData } from "./InGameMenu";

  export let data: undefined | InGameMenuData;

  let dialog: HTMLDialogElement;

  $: if (dialog) {
    if (data) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }

  const userChoice = (choice: boolean) => () => {
    data!.choiceHandler(choice);
    data = undefined;
  };
</script>

{#if data}
  <dialog bind:this={dialog}>
    <table>
      <tr>
        <td colspan="2">
          <span class="questionLabel">{data.question}</span>
        </td>
      </tr>
      <tr>
        <td>
          <Button
            width={139}
            height={52}
            color="silver"
            on:click={userChoice(false)}
          >
            {data.cancelLabel}
          </Button>
        </td>
        <td>
          <Button
            width={139}
            height={52}
            color="yellow"
            on:click={userChoice(true)}
          >
            {data.validateLabel}
          </Button>
        </td>
      </tr>
    </table>
  </dialog>
{/if}

<style>
  dialog {
    width: 100%;
    height: 266px;
    background: var(--Semi-Dark-Navy, #1f3641);
    color: var(--Silver, #a8bfc9);
    border: unset;
    display: grid;
    place-items: center;

    &::backdrop {
      opacity: 0.5;
      background: #000;
    }

    & table {
      height: 100%;
      text-transform: uppercase;
      font-weight: 700;

      & tr:first-child td {
        vertical-align: middle;
      }

      & .questionLabel {
        font-size: 40px;
      }

      & button {
        position: relative;
        width: 139px;
        height: 52px;
        border-radius: 10px;
        color: var(--Dark-Navy, #1a2a33);

        &.validate {
          background: var(--Light-Yellow, #f2b137);
          box-shadow: 0px -4px 0px 0px #cc8b13 inset;
        }

        &.cancel {
          background: var(--Silver, #a8bfc9);
          box-shadow: 0px -4px 0px 0px #6b8997 inset;
        }
      }
    }
  }
  dialog[open] {
    animation: zoom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.3s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
</style>
