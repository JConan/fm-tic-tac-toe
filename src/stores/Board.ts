import { get, writable } from "svelte/store";

export function CreateBoard() {
    let board = writable(Array<string>(9).fill(''))

    function setCell(index: number, player: 'X' | 'O') {
        const state = get(board)
        state[index] = player
        board.set(state)
        return true
    }

    return { ...board, setCell };
}