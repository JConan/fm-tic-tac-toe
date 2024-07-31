<script>
  import Button from "$lib/components/base/Button.svelte";
  import { gameScoreStore } from "$stores/GameScore";
</script>

<div class="score-bar">
  <Button class="score button-blue no-shadow" disabled>
    <div class="score-display">
      <span>X (YOU)</span><span class="score-counter"
        >{$gameScoreStore.playerOne}</span
      >
    </div>
  </Button>
  <Button class="score no-shadow" disabled>
    <div class="score-display">
      <span>TIES</span><span class="score-counter">{$gameScoreStore.tie}</span>
    </div>
  </Button>
  <Button class="score button-yellow no-shadow" disabled>
    <div class="score-display">
      <span>O (CPU)</span><span class="score-counter"
        >{$gameScoreStore.playerTwo}</span
      >
    </div>
  </Button>
</div>

<style>
  .score-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px;
    align-items: center;
    font-size: 14px;

    & .score-counter {
      font-size: 24px;
      font-weight: 700;
    }

    & .button {
      --width: 140px;
      --height: 72px;
    }

    & .score-display {
      display: grid;
      place-items: center;
      padding-top: 13px;
      padding-bottom: 11px;
    }
  }

  @media (max-width: 600px) {
    .score-bar :global(.button) {
      --width: 96px;
      --height: 64px;
      font-size: 12px;
    }
    .score-counter {
      font-size: 20px;
      font-weight: 700;
    }
  }
</style>
